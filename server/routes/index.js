var express = require('express');
var router = express.Router();
var awards = require("./awards");
var nebula = require("./nebula");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(awards);
router.use(nebula);

module.exports = router;
