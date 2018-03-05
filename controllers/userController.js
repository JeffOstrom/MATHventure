const path = require("path");
const router = require("express").Router();
const db = require("../models/user");

// creating a post route to '/api/users'
router.post("/api/users", function(req, res) {
    console.log(req.body);
    console.log("work");

    // creating a user object
    const user = {
        name: req.body.name,
        username: req.body.userName,
        password: req.body.password,
    };
    console.log(user.username);
    console.log(req.body.userName);

    // using the db we required and creating it with the user object
    db
        .create(user)
        .then(dbUser => { console.log(dbUser); res.json(dbUser) })
        .catch(err => res.status(422).json(err));
  });
  
  module.exports = router;