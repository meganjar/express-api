const express = require("express");
// const mongoose = require('mongoose');  to connect MongoDB at a later time
const app = express();
const port = 3000 
// || process.env.PORT;
// Middleware
//body parser
const bodyParser = require("body-parser");
require('dotenv').config();
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/dates", (req, res) => {
  ressend("Hello, Express!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// register views
app.set('view engine', 'ejs');

