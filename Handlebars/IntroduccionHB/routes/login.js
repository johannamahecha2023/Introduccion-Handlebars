const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('login', {mensaje:'Ingrese su usuario y contraseña'})
})
router.post('/validacion',(req,res)=>{
    const username=req.body.user
    const password=req.body.pass
    if(username== 'desarrolladora'&& password=='backend1234'){
        res.redirect('/users')
    }
    else{
        res.render('login', {mensaje:'credenciales incorrectas', error:true})
    }
})
module.exports=router