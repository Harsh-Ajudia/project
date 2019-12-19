var db = require('../../database-connection');

var Hotels = {
    getHotels: function(Data, callback)
    {	
		let searchterm = Data.query.searchterm;
		let sort = typeof Data.query.sort !== 'undefined' ? Data.query.sort : 'name';
		let region_type = typeof Data.query.region_type !== 'undefined' && Data.query.region_type != "" ? "AND neighbourhood_group = '" + Data.query.region_type + "'": '';
		sort = sort != '' ? sort : 'name';
		let order = typeof Data.query.order !== 'undefined' ? Data.query.order : 'ASC';
		
        return db.query("SELECT * from singapore_hotels WHERE name LIKE '%" + searchterm + "%' " + region_type + " ORDER BY " + sort + " " + order, callback);
    },
	getSearchData: function(req, callback)
    {	
		return db.query("SELECT DISTINCT neighbourhood_group FROM singapore_hotels", callback);
    },
    addHotel: function (User, callback) {
        return db.query('Insert into users(fname, lname, email) values(?, ?, ?)',[User.fname, User.lname, User.email], callback);
    },
	
	viewHotel: function (request, callback) {
        return db.query('SELECT * from singapore_hotels WHERE id = ?',[request.params.id] , callback);
    }
}

module.exports = Hotels;