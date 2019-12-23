var db = require('../../database-connection');

var Contacts = {
    get: function(Data, callback)
    {	
		let searchterm = Data.query.searchterm;
		let sort = typeof Data.query.sort !== 'undefined' ? Data.query.sort : 'name';
		let region_type = typeof Data.query.region_type !== 'undefined' && Data.query.region_type != "" ? "AND neighbourhood_group = '" + Data.query.region_type + "'": '';
		sort = sort != '' ? sort : 'name';
		let order = typeof Data.query.order !== 'undefined' ? Data.query.order : 'ASC';
		
        return db.query("SELECT * from contact WHERE name LIKE '%" + searchterm + "%' " + region_type + " ORDER BY " + sort + " " + order, callback);
    },
    add: function (Data, callback) {
        return db.query('Insert into contact(name, email, subject, message) values(?, ?, ?, ?)',[Data.name, Data.email, Data.subject, Data.message], callback);
    },
	
	view: function (request, callback) {
        return db.query('SELECT * from contact WHERE id = ?',[request.params.id] , callback);
    }
}

module.exports = Contacts;