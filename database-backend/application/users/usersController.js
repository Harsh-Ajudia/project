var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Users = require('./users');
const UserModel = require('../../models/user');

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


router.get('/', function (req, res) {
    Users.get(req, function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/view/:id', function (req, res) {
    Users.view(req, function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/add-user', function (req, res) {
    Users.add(req.body, function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/signup', function (req, res, next) {
    bcrypt.hash(req.body.password, salt)
    .then(hash => {
        const user = new UserModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash,
        }); 

        user.save()
            .then(result => {
                res.status(201).json({
                    _message: "User Created",
                    _result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    _error: err
                });
            });
    });
    /*bcrypt.hash(req.body.password, salt, (err, hash) => {
        const user = new UserModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash,
        });

        user.save()
            .then(result => {
                console.log('fd');
                res.status(201).json({
                    _message: "User Created",
                    _result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    _error: err
                });
            });
    });*/


});

module.exports = router;