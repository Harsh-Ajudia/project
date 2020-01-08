const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postScheme = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imagePath: { 
        type: String, 
        required: true
    }
});

postScheme.plugin(uniqueValidator);

module.exports = mongoose.model('Post', postScheme);