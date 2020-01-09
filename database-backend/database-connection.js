var mysql = require('mysql');

var con = mysql.createConnection({
	host: "johnny.heliohost.org",
	user: "harshaju",
	password: "2Jg3@eUXUW6TwdQ",
	database: "project"
});
module.exports=con;

con.connect(function(err) {
	if (err) throw err;
		console.log("MySql DB Connected!");
});