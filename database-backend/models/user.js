const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userScheme = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

userScheme.plugin(uniqueValidator);

module.exports = mongoose.model('User', userScheme);