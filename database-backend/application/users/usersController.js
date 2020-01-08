var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Users = require('./users');

const UserModel = require('../../models/user');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

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
                        _result: result,
                        _status: 'success'
                    });
                })
                .catch(err => {
                    res.status(200).json({
                        _error: err,
                        _status: 'error'
                    });
                });
        });
});
router.post('/login', function (req, res, next) {
    let fetchedUser;
    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(200).json({
                    _message: "Authentication failed! User Not found!",
                    _status: 'error'
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(200).json({
                    _message: "Authentication failed! Email/Password is incorrect!",
                    _status: 'error'
                });
            }
            const token = jwt.sign({
                userid: fetchedUser._id,
                first_name: fetchedUser.first_name,
                last_name: fetchedUser.last_name,
                email: fetchedUser.email,
            }, 'vatican_cameos_is_the_string_typical_to_a_json_web_token_that_i_have_used',
                {
                    expiresIn: '3h',
                });

            res.status(200).json({
                _token: token,
                _status: 'success',
                _message: 'You are logged in'
            });
        }).catch(
            err => {
                return res.status(200).json({
                    _message: "Authentication failed",
                    _status: 'error',
                    _error: err
                });
            }
        );
});
module.exports = router;