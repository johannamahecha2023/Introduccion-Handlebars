const mysql=require('mysql')
const conexion=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Leidy.0331',
    database: 'colegio'
  })
   //connect permite la conexion a la base de datos
  
  conexion.connect((error)=>{
    if (error){
      console.log(`ha ocurrido un error en la conexion:${error}`)
      return;
    }else{
      console.log('conexion exitosa')
    }
  })

  module.exports={conexion}