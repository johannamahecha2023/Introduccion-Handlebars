var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    const InfoMascotas={
        nombres:'Chulita Sombra Cocoa',
        apellidos:'Mahecha Olivos',
        edad:3
    }
    res.render('mascotas', InfoMascotas)
})

module.exports= router;