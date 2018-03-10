const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// var cookieParser = require('cookie-parser');
// var session = require("express-session");
const route1 = require("./controllers/userController.js");
const route2 = require("./controllers/userLogin.js")
const app = express();
const PORT = process.env.PORT || 3030;

// require("dotenv").config();

// app.use(cookieParser());
// app.use(session({secret: process.env.SECRET_KEY}))

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(route1);
app.use(route2);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mathventure",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);