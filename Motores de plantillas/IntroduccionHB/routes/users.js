var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const usuarios=[
    {nombre:'chulita',edad:3},
    {nombre:'angel',edad:5},
    {nombre:'nora',edad:4}  
  ]
  res.render('usuarios',{usuarios})
});

module.exports = router;
