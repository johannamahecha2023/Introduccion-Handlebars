var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
/* el metodo render renderiza la plantilla
en este caso la plantilla es index.hbs
a la plantilla index se le manda una informacion que este caso es curso
 */
  const curso ={
     nombre: 'Desarrollo Web Basico',
     profesor: 'Liliana Herrera',
     correo: 'lherrera@udistrital.edu.co',
     horario: 'L-V 7:00 PM- 9:30 PM',
     institucion: 'Universidad Distrital Francisco Jose de Caldas',
     fecha_finalizacion:'2024/12/31 00:00:00.000'
  }
  res.render('index', curso);
});
module.exports = router;
