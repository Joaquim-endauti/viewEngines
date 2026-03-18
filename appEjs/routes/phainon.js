var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('phainon', { title: 'Phainon' });
});

router.get('/')

module.exports = router;