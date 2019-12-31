const mongoose = require('mongoose');

const faqScheme = mongoose.Schema({
	question: {
		type: String,
		required: true
	},

	answer: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('Faq', faqScheme);