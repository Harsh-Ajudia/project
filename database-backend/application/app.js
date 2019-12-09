var express = require('express');
var app = express();

var UsersController = require('./user/userController');
var cityController = require('./cities/cityController');

app.use('/user', UsersController);
app.use('/cities', cityController);
module.exports = app;
