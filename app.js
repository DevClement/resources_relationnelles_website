var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resource_type_relationsRouter = require('./routes/resource_type_relations');
var resource_typeRouter = require('./routes/resource_type');
var resource_categoriesRouter = require('./routes/resource_categories');
var resourceRouter = require('./routes/resource');
var commentRouter = require('./routes/comment');
var markersRouter = require('./routes/markers');
var langageRouter = require('./routes/langage');
var resources_langRouter = require('./routes/resources_lang');
var resource_plus_type_relation = require('./routes/resource_plus_type_relation');

var app = express();
app.use(cors()) // permet de configurer les autorisations des urls qui ont le droit d'appeler le serveur
// view engine setup

let bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resource_type_relations', resource_type_relationsRouter);
app.use('/resource_type', resource_typeRouter);
app.use('/resource_categories', resource_categoriesRouter);
app.use('/resource', resourceRouter);
app.use('/comment', commentRouter);
app.use('/markers', markersRouter);
app.use('/langage', langageRouter);
app.use('/resources_lang', resources_langRouter);
app.use('/resource_plus_type_relation', resource_plus_type_relation);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('');
});

module.exports = app;
