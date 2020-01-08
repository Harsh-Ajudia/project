const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
	try {
		const token = req.headers.authhorization.split(" ")[1];
		jwt.verify(token, "vatican_cameos_is_the_string_typical_to_a_json_web_token_that_i_have_used");
		next();
	} catch (error){
		res.status(401).json({
			_message: "Auth failed!",
			_status: "error",
			_error: error
		})
	}
	
}