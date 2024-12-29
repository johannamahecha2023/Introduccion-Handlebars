var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//importando handlebars para crear los helpers
const {create}=require('express-handlebars')
// importando moment para poder utilizarlo
const moment=require('moment')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const docenteRouter = require('./routes/docente');
const perfilRouter = require('./routes/perfil');
const loginRouter = require('./routes/login');
const mascotasRouter = require('./routes/mascotas');
var app = express();

//configuracion de express con handlebars para crear los helpers
const hbs=create({
  //Establecemos la extension de handlebars para los archivod que es .hbs
  extname:'.hbs',
  //Creacion de helpers
  helpers: {
    saludo: function(nombre){
      return `hola ${nombre}`
    },
    mayuscula: function(texto){
      return texto.toUpperCase();
    }
  }
})

/* Segundo metodo */
hbs.handlebars.registerHelper('formatoFecha',function(fecha){
  return moment(fecha).format('YYYY-MM-DD')
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('.hbs',hbs.engine)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/docente', docenteRouter);
app.use('/perfil', perfilRouter);
app.use('/login', loginRouter)
app.use('/mascotas', mascotasRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
