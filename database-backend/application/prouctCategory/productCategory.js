var db = require('../../database-connection');

var ProductCategories = {
    getCategory: function(callback)
    {
        return db.query('SELECT * from product_category', callback);
    },
	
    addCategory: function (Record, callback) {
        return db.query('Insert into product_category(name, parent_id, status) values(?, ?, ?)',[Record.name, Record.parent_id, Record.status], callback);
    }
}

module.exports = ProductCategories;