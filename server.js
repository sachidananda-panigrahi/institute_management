var express = require("express");
var app = express();
var router = require('./routes');
var mongoose = require('mongoose');
var seeder = require('./helper/Seeder');


// MongoDB 
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');

mongoose.connection.on('open', function () {
    seeder.populateDB;
});
app.set('view engine', 'jade');

/* Login page */
app.get( '/', router.login);

// get users
app.get('/api/userlist',router.user);

app.post("/user/add", function(req, res) { 
/* some server side logic */
  res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});

var port = process.env.PORT || 1234;
app.listen(port, function() {
 console.log("Listening on " + port);
});