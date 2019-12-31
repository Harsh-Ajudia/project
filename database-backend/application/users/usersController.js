var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Users = require('./users');

router.get('/', function (req, res) {
    Users.get(req,function(err,rows){
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
    Users.view(req, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.post('/add-user', function (req, res) {
    Users.add(req.body,function(err,rows){
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