var express = require('express');
var router = express.Router();
var mongo = require('../database/mongooseclient.js');
var db = require('../database/sqlclient.js')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password'},
  function(username, password, done) {
    console.log('username', username);
    console.log('password', password);
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
  res.redirect('/');
};

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
  return function (req, res, next) {
    res.render(page, { loggedIn: req.user != null, user: req.user });
  }
}

/* GET home page. */
router.get('/', render('index'));

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Color Test' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Calendar' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/datatalks', function(req, res, next) {
  res.render('datatalks', { title: 'Data Talks' });
});

router.post('/api/v1/createBlogPost', async function(req, res, next) {
  var status = await mongo.createBlogPost(req.body);
  res.send(status);
});

router.get('/resources', isAuthenticated, async function(req, res, next) {
  res.render('about');
})

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     console.log(req.body);
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/');
//     });
//   })(req, res, next);
// });
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/about',
}), function(req, res, next) {
  res.render('index');
});




module.exports = router;
