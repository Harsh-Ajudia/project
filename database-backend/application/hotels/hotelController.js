var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Hotels = require('./hotel');

router.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    Hotels.getHotels(req,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.get('/get-searchdata', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	Hotels.getSearchData(req, function(err,rows){
		if(err) {
			res.status(400).json(err);
		}
		else
		{
			res.json(rows);
		}
	});
});
router.get('/view/:id', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    Hotels.viewHotel(req, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res) {
    Hotels.addHotels(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;