const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   const objperfil={
    nombre: 'Chula Sombra Cocoa',
    apellido: 'Mahecha Olivos',
    curso: 'Curso Backend Basico',
    trabajo: 'Analista Funcional',
    empresa: 'transfiriendo S.A',
    universidad: 'Universidad Distrital Francisco Jose de Caldas',
    
   }
   res.render('perfil', objperfil)
})

module.exports= router;