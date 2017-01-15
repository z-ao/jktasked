var express = require('express');
var router = express.Router();

var newDao = require('../dao/newdao');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/query',function (req, rse ,nect) {
	newDao.queryAll(req, res, next);
});

module.exports = router;
