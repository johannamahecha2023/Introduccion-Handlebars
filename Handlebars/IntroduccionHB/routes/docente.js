const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const info={
        nombre: "Leidy",
        apellido: "Mahecha",
        edad:"28",
        materia:"Algebra lineal",
        profesion:"Ingeniera de Software"
    }
    res.render('docente', info)
})


module.exports= router;