var db = require('../../database-connection');

var Users = {
    get: function(Data, callback)
    {
		let searchterm = typeof Data.query.searchterm !== 'undefined' ? Data.query.searchterm : '';
		let sort = typeof Data.query.sort !== 'undefined' ? Data.query.sort : 'full_name';
		let region_type = typeof Data.query.region_type !== 'undefined' && Data.query.region_type != "" ? "AND neighbourhood_group = '" + Data.query.region_type + "'": '';
		sort = sort != '' ? sort : 'id';
		let order = typeof Data.query.order !== 'undefined' ? Data.query.order : 'ASC';
		
		let query = "SELECT * from users WHERE full_name LIKE '%" + searchterm + "%' " + " ORDER BY " + sort + " " + order;
        return db.query(query, callback);
    },
    add: function (Data, callback) {
        return db.query('Insert into users(full_name, email) values(?, ?)',[Data.full_name, Data.email, Data.subject, Data.message], callback);
    },
	
	view: function (request, callback) {
        var res = db.query('SELECT * from users WHERE id = ?',[request.params.id] , callback);
		console.log(res);
		return res;
    }
}

module.exports = Users;