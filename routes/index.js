var express = require('express');
var router = express.Router();
var mongo = require('../database/mongooseclient.js');
var db = require('../database/sqlclient.js')
const cache = require('../database/cacheclient.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const probe = require('pmx').probe();
const getRole = require('../utils/getOfficerRole.js');

const reqMeter = probe.meter({
  name: 'requests/hour manual',
  samples: 3600,
});

passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password'},
  function(username, password, done) {
    db.checkLogin({email: username, password}).then(result => {
      return done(null, result);
    }).catch(err => {
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

const render = function (page) {
  const pageMeter = probe.meter({
    name: 'requests/hour for page: '+page,
    samples: 3600,
  });
  return async function (req, res, next) {
    reqMeter.mark();
    pageMeter.mark();
    const sessionData = {};
    if (req.user) {
      const notificationsObj = await cache.get(req.user.id, 'notifications');
      if (notificationsObj)
        sessionData.notifications = notificationsObj.notifications;
    };
    res.render(page, {
      loggedIn: req.user != null,
      user: req.user,
      sessionData,
    });
  }
}

/* GET home page. */
router.get('/', render('index'));

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Color Test' });
});

router.get('/about', render('about'));

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

router.post('/api/v1/members', isOfficer, async function (req, res, next) {
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
})

router.post('/api/v1/onPayment', async function(req, res, next) {
  console.log(req.body);
  res.sendStatus(200);
});

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
