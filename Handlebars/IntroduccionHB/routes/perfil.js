const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   const infoEstudiante={
    nombre: 'Chula Sombra Cocoa',
    apellido: 'Mahecha Olivos',
    curso: 'Curso Backend Intermedio',
    trabajo: 'Analista Funcional',
    empresa: 'transfiriendo S.A',
    universidad: 'Universidad Distrital Francisco Jose de Caldas',
    
   }
   res.render('estudiante', infoEstudiante)
})

module.exports= router;