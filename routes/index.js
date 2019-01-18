var express = require('express');
var router = express.Router();
var mongo = require('../database/mongooseclient.js');
var db = require('../database/sqlclient.js')
const cache = require('../database/cacheclient.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const probe = require('pmx').probe();
const getRole = require('../utils/getOfficerRole.js');
const square = require('../utils/squareclient.js');
const markMemberAsPaid = require('../utils/markMemberAsPaid.js');
const sendNotification = require('../utils/sendNotification.js');
const bodyParser = require('body-parser');

const reqMeter = probe.meter({
  name: 'requests/hour manual',
  samples: 3600,
});

passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password'},
  function(username, password, done) {
    console.log("Checking login")
    db.checkLogin({email: username, password}).then(result => {
      console.log("Success.  Result is "+JSON.stringify(result))
      return done(null, result);
    }).catch(err => {
      console.log("Failure.  Error is "+err)
      return done(err);
    });
  }
));

const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/?login=true');
};

const isOfficer = function (req, res, next) {
  console.log("CHECKING IF OFFICER", req.user);
  if (!req.isAuthenticated()) {
    console.log("not authenticated");
    res.redirect('/?login=true');
    return;
  }
  getRole(req.user.id)
    .then(role => {
      console.log('role', role);
      if (role != null) {
        return next();
      }
      res.redirect('/?login=true');
    })
    .catch(error => {
      console.log("error", error);
      res.redirect('/?login=true');
    })
}

passport.serializeUser(function(user, done) {
  // please read the Passport documentation on how to implement this. We're now
  // just serializing the entire 'user' object. It would be more sane to serialize
  // just the unique user-id, so you can retrieve the user object from the database
  // in .deserializeUser().
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // Again, read the documentation.
  done(null, user);
});

const render = function (page, getData) {
  const pageMeter = probe.meter({
    name: 'requests/hour for page: '+page,
    samples: 3600,
  });
  return async function (req, res, next) {
    reqMeter.mark();
    pageMeter.mark();
    const sessionData = {};
    if (req.user) {
      const notifications = await cache.get(req.user.id, 'notifications');
      if (notifications) delete notifications.key;
      sessionData.notifications = notifications;
    };
    let data = {};
    if (getData != null) {
      data = await getData();
    }
    console.log(`Rendering page ${page}.  req.user is ${JSON.stringify(req.user)}`)
    res.render(page, {
      loggedIn: req.user != null,
      user: req.user,
      ...data,
      sessionData,
    });
  }
}

/* GET home page. */
router.get('/', render('index'));

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Color Test' });
});

router.get('/about', render('about', async () => {
  const ret = {
    faqs: await db.getFaqs()
  }
  return ret;
}));

router.get('/people', render('people'));
router.get('/admin', isOfficer, render('admin'));
router.get('/calendar', render('calendar'));

router.get('/projects', render('projects'));
router.get('/kickoffsignup', render('kickoffsignup'));

router.get('/blog', render('blog'));

router.get('/datatalks', render('datatalks'));

router.post('/api/v1/createBlogPost', async function(req, res, next) {
  var status = await mongo.createBlogPost(req.body);
  res.send(status);
});

router.post('/api/v1/editMember', isAuthenticated, async function (req, res, next) {
  req.body = await db.hash(req.body);
  try {
    const q = db.members.update(req.body).where(db.members.id.equals(req.user.id)).toQuery();
    const dbResponse = await db.pool.query(q.text, q.values);
    console.log(dbResponse);
    res.send(200);
  } catch(error) {
    console.error(error);
    res.send(500);
  }
});

router.post('/api/v1/broadcastNotification', async function (req, res, next) {
  try {
    await sendNotification([],req.body.text,true);
    res.send(200);
  } catch(error) {
    console.error(error);
    res.send(500);
  }
});

router.post('/api/v1/onNotificationAcknowledged', isAuthenticated, async function (req, res, next) {
  const params = {
    TableName: cache.USER_CACHE,
    Key: {key: req.user.id + ':notifications'},
    UpdateExpression: "REMOVE #notificationId",
    ReturnValues: 'ALL_NEW',
    ExpressionAttributeNames: {
      '#notificationId': req.body.notificationId,
    }
  };
  console.log(params)
  cache.client.update(params).promise().then(response => {
    console.log(response);
    res.sendStatus(200);
  }).catch(error => {
    console.error(error);
    res.sendStatus(500);
  });
})

router.get('/api/v1/paidMembers', isOfficer, async function (req, res, next) {
  const getPayingMembersQuery = db.members
    .select(db.members.firstName, db.members.lastName, db.members.email, db.payments.amount)
    .from(db.members.join(db.payments).on(db.members.id.equals(db.payments.memberId)))
    .toQuery();
  try {
    const response = await db.pool.query(getPayingMembersQuery.text, getPayingMembersQuery.values);
    console.log(response);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post('/api/v1/makeMembershipPayment', isAuthenticated, async function (req, res, next) {
  console.log(req.body.nonce);
  const finish = async (status, upgrade) => {
    await sendNotification([req.user.id], status);
    req.user.isPaying = upgrade;
    res.redirect('/profile');
  };
  try {
    const paymentResponse = await square.chargeMembership(req.body.nonce);
    const payment = paymentResponse.data;
    cache.put(req.user.id, 'mostRecentPayment', payment).catch(console.error);
    const status = await markMemberAsPaid({id: req.user.id}, payment.transaction.id);
    if (status !== true) { // if we get an error marking them as paid
      // log the error, and give them paid status temporarily
      console.log(status);
      cache.put(req.user.id, 'mostRecentError', {
        error: status,
        payment: payment,
      }).then(x => finish("There was an error marking you as a paid member, but we'll fix it.  You will have paid member privileges for this session.", true))
        .catch(x => res.sendStatus(500));
      return;
    }
    finish("You are now a paid member!", true);
  } catch (error) {
    if (error.response.status === 402) {
      finish('Sorry, there was a problem processing your payment.  Please make sure card is valid and try again.', false)
      return;
    }
    console.log('failed to charge card');
    console.log(error);
    cache.put(req.user.id, 'mostRecentError', "Error charging card").catch(console.error);
    finish("Sorry, we failed to charge your card.  Please make sure the card is valid and try again.", false);
  }
});

router.get('/api/v1/unpaidMembers', isOfficer, async function (req, res, next) {
  const query = db.members
    .select(db.members.firstName, db.members.lastName, db.members.id, db.members.email)
    .from(db.members.leftJoin(db.payments).on(db.members.id.equals(db.payments.memberId)))
    .where(db.payments.memberId.isNull());
  try {
    const response = await db.query(query);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

router.post('/api/v1/onPayment', async function(req, res, next) {
  console.log(req.body);
  res.sendStatus(200);
});

router.post('/api/v1/setFaqs', isOfficer, async function(req, res, next) {
  if (!req.body.faqs) {
    res.sendStatus(400);
    return;
  }
  const query = db.contents.insert(
    db.contents.type.value('faqs'),
    db.contents.content.value(req.body)
  );
  try {
    const response = await db.query(query);
    res.send(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post('/api/v1/addBlogPost', bodyParser.text(), async function(req, res, next) {
    console.log(req.body);
    const query = db.contents.insert(
      db.contents.type.value('blog'),
      db.contents.blog.value(req.body)
    );
    try {
      const response = await db.query(query);
      res.send(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
});

router.get('/api/v1/faqs', async function(req, res, next) {
  try {
    const faqs = await db.getFaqs();
    console.log(faqs);
    res.send(faqs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post('/api/v1/markMemberAsPaid', isOfficer, async function(req, res, next) {
  if (!req.body.memberId) {
    res.sendStatus(400);
    return;
  }
  try {
    const status = await markMemberAsPaid({id: req.body.memberId});
    if (status !== true) {
      cache.put(req.body.memberId, 'errorMarkingAsPaid', {status});
    }
  } catch (error) {
    cache.put(req.body.memberId, 'exceptionMarkingAsPaid', {error});
  }
  res.sendStatus(200);
});

router.post('/api/v1/markMemberAsAttending', isOfficer, async function(req, res,next) {
  cache.put(req.body.memberId, 'secondMeetingAttendance', {attended: true});
  res.sendStatus(200);
})

router.post('/api/v1/kickoffsignup', async function(req, res, next) {
  // console.log(req.body.Authorization);
  if (req.body.Authorization === 'ilikeblueberries') {
    try {
      const addResponse = await db.addMember(req.body.data);
      if (addResponse.rowCount != 1) return res.sendStatus(500);
      const getIdQuery = await db.members
        .select(db.members.id).from(db.members)
        .where(db.members.email.equals(req.body.data.email)).toQuery();
      const getIdResponse = await db.pool.query(getIdQuery.text, getIdQuery.values);
      const memberId = getIdResponse.rows[0].id;
      const addPaymentQuery = db.payments.insert({
        memberId,
        timestamp: new Date(),
        amount: 1500,
      }).toQuery();
      const addPaymentResponse = await db.pool.query(addPaymentQuery.text, addPaymentQuery.values);
      // await db.payments.insert()
      res.sendStatus(200);
    } catch (error) {
      error.error = true;
      res.send(error);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
})

router.get('/resources', isAuthenticated, render('resources'));
router.get('/profile', isAuthenticated, render('profile'));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/?login=true&loginFailed=true',
}), function(req, res, next) {
  res.render('index');
});

router.post('/register', async function(req, res, next) {
  await db.addMember(req.body);
  res.redirect('/');
})

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
})




module.exports = router;
