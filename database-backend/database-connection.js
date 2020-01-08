var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "project"
});
module.exports=con;

con.connect(function(err) {
	if (err) throw err;
		console.log("MySql DB Connected!");
});