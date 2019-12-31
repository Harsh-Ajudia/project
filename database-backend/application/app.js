var express = require('express');
var app = express();
var cors = require('cors');


// controllers listing:
var hotelController = require('./hotels/hotelController');
var contactController = require('./contact/contactController');
var usersController = require('./users/usersController');

// for public folder
app.use(express.static(__dirname + '/src'));

app.set('json spaces', 2);

// --------------------------------------------------------------------
app.use(cors());
app.use('/hotels', hotelController);
app.use('/contact', contactController);
app.use('/users', usersController);

module.exports = app;