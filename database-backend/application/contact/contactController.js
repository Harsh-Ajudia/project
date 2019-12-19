var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Contacts = require('./contact');

router.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    Contacts.get(req,function(err,rows){
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
    Contacts.view(req, function(err,rows){
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
    Contacts.add(req.body,function(err,count){
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