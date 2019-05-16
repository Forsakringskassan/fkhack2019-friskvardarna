var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookingsRouter = require('./routes/bookings');
var eventsRouter = require('./routes/events');
var locationsRouter = require('./routes/locations');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookings', bookingsRouter);
app.use('/events', eventsRouter);
app.use('/locations', locationsRouter);

module.exports = app;
