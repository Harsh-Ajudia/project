var express = require('express');
var app = express();

// controllers listing:
var hotelController = require('./hotels/hotelController');

app.use('/hotels', hotelController);
module.exports = app;