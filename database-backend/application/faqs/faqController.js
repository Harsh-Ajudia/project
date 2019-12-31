var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Faqs = require('./faq');

router.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    Faqs.get(req,function(err,rows){
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
    Faqs.view(req, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.post('/add-faq', function (req, res) {
    Faqs.add(req.body,function(err,rows){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;