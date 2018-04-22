var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  // 处理一些业务并返回下面数据
  res.json({name:'adoctors',pwd:'123'});
});

module.exports = router;
