var db = require('../../database-connection');

var Users = {
    getUser: function(callback)
    {
        return db.query('SELECT * from users', callback);
    },
	
    addUser: function (User, callback) {
        return db.query('Insert into users(fname, lname, email) values(?, ?, ?)',[User.fname, User.lname, User.email], callback);
    },
	
	viewUser: function (request, callback) {
        return db.query('SELECT * from users WHERE id = ?',[request.params.id] , callback);
    }
}

module.exports = Users;