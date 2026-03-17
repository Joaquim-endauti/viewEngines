var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('jonsnow', { title: 'Jon Snow' });
});

module.exports = router;
