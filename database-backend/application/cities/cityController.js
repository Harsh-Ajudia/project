var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Cities = require('./cities');

router.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    Cities.getCities(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports = router;