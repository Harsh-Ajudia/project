var db = require('../../database-connection');

var Cities = {
    getCities: function(callback)
    {	
		var http = require("https");
		var options = {
			"method": "GET",
			"hostname": "wft-geo-db.p.rapidapi.com",
			"port": null,
			"path": "/v1/geo/cities",
			"headers": {
				"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
				"x-rapidapi-key": "2c6f50468amsh7e507baf6ab24fcp1d9e66jsnf05bc62679e7"
			}
		};

		var req = http.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function () {
				var body = Buffer.concat(chunks);
				console.log(body.toString());
			});
		});

		req.end();
        return 'hello';
    }
}

module.exports = Cities;