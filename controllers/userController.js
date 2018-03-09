const path = require("path");
const router = require("express").Router();
const db = require("../models/user");

// creating a post route to '/api/users'
router.post("/api/users", function(req, res) {
    console.log(req.body);
    console.log("work");

    if (req.body.phone === null) {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        };
    }
    else {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phone
        }
    }
    // creating a user object
    
    console.log(user.username);

    // using the db we required and creating it with the user object
    db
        .create(user)
        .then(dbUser => { console.log(dbUser); res.json(dbUser) })
        .catch(err => res.status(422).json(err));
  });
  
  module.exports = router;