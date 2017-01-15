var express = require('express');
var router = express.Router();

var newDao = require('../dao/newdao');

router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/addnew', function (req, res, next) {
    newDao.add(req, res, next);
});

router.get('/query', function(req, res, next) {
    newDao.queryAll(req, res, next);
});
 
router.get('/deletenew', function(req, res, next) {
    newDao.delete(req, res, next);
});
 
router.get('/updatenew', function(req, res, next) {
    newDao.update(req, res, next);
});


module.exports = router;