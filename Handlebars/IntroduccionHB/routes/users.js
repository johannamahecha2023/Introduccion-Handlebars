var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('enrutamiento para usuarios');
});

module.exports = router;
