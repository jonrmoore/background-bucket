var express = require('express');
var router = express.Router();
var awards = require("./awards");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(awards);

module.exports = router;
