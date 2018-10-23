var express = require('express');
var router = express.Router();
var con = require ('./connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('./select')(router,con);
module.exports = router;
