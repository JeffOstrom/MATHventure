const path = require("path");
const router = require("express").Router();
const db = require("../models/user");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// creating a post route to '/api/users'
router.get("/api/login", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(password, salt, function(err, hash){
            if(err) return next(err);
            password = hash;
            next();
        });
    });

    db.findOne({
        'username': username,
        'password': password,
    }).then(function(results) {
        if (results === null) {
            res.send("Incorrect Login")
        } else {
            req.session.name = username;
            req.send(req.session.name);
        }
    })

  });
  
  module.exports = router;