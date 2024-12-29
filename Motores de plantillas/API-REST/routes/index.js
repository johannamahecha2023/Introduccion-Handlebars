var express = require('express');
var router = express.Router();
const { conexion }= require('../database/conexion')
//importamos el modulo de mysql para poder concectarnos a la base de datos

router.get('/', function(req, res, next) {
  conexion.query('select * from estudiantes;', (error,resultado)=>{
    if(error){
      res.status(500).send('ocurrio un error en la consulta')
    }else{
      res.status(200).render('index',{ resultado, title: 'estudiantes'})
    }
  })
});

module.exports = router;
