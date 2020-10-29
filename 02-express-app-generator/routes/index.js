var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.redirect('/')
});

router.get('/hello', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
