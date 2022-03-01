const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const port = process.env.PORT || 5000;
const users = require('./routes/users'); 

app.use(passport.initialize());
require('./passport')(passport);

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get driver connection
const dbo = require("./db");

app.use('/api/users', users);
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});