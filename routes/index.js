var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Color Test' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
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






module.exports = router;
