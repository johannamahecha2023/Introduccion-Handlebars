var express = require('express');
var router = express.Router();
const { conexion }= require('../database/conexion')
//importamos el modulo de mysql para poder concectarnos a la base de datos

router.get('/estudiantes', function(req, res, next) {
  conexion.query('select * from estudiantes;', (error,resultado)=>{
    if(error){
      res.status(500).send('ocurrio un error en la consulta')
    }else{
      res.status(200).render('index',{ resultado, title: 'estudiantes'})
    }
  })
});
router.get('/registro-profesores',(req,res) =>{
  res.sendFile('registro-profesores.html', {root: 'public'})
})
router.post("/agregar-profesor", (req,res)=>{
  const nombre= req.body.name
  const apellido=req.body.lastname
  const fecha_nacimiento=req.body.date
  const genero=req.body.genero
  const direccion=req.body.direccion
  conexion.query(`INSERT INTO profesores (nombre, apellido, fecha_nacimiento, genero, direccion) VALUES ('${nombre}','${apellido}','${fecha_nacimiento}','${genero}','${direccion}')`,(error,resultado)=>{
    if(error){
      console.log(`ocurrio un error en la ejecucion ${error}`)
      res.status(500).send('error en la consulta')
    }
    else{
      res.status(200).redirect('/profesores')
    }
  })
})
router.get('/profesores', function(req, res, next) {
  //consulta de profesores en la BD en sql
  conexion.query('select * from profesores;', (error,resultado)=>{
    if(error){
      res.status(500).send('ocurrio un error en la consulta')
    }else{
      res.status(200).render('index',{ resultado, title: 'profesores'})
    }
  })
});



module.exports = router;
