var express = require('express');
var app = express();
var cors = require('cors');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://user_read_write:XnTLUvmiDV88xTOB@cluster0-xzugn.mongodb.net/mean?retryWrites=true&w=majority")
    .then( () => {
        console.log("Mongo DB connected!");
    })
    .catch( () => {
        console.log("Could not connect to Mongo DB");
    }); 

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