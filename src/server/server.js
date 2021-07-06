var express = require('express');
var cors = require("cors");
var jwt = require("jsonwebtoken");
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./routes");
var app = express();
const dbPath = 'mongodb://localhost/user';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.listen(3002, () => console.log("server run successfully on port 3002"));