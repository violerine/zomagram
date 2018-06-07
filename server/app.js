require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photosRouter = require('./routes/foods')

const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS
mongoose.connect(`mongodb://${dbuser}:${dbpass}@ds253468.mlab.com:53468/foodstagram`)

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbUrl = `mongodb://${dbUser}:${dbPass}@ds253468.mlab.com:53468/foodstagram`

mongoose.connect(dbUrl)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/photos',photosRouter)

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
