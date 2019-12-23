var express = require('express');
var app = express();
var cors = require('cors');


// controllers listing:
var hotelController = require('./hotels/hotelController');
var contactController = require('./contact/contactController');

app.use(cors());
app.use('/hotels', hotelController);
app.use('/contact', contactController);
module.exports = app;