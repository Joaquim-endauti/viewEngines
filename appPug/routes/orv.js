var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('orv', { title: 'Omniscient Reader\'s Viewpoint' });
});

module.exports = router;
