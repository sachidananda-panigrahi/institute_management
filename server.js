var express = require("express");
var app = express();
var router = require('./js/routes');
var mongoose = require('mongoose');
var seeder = require('./js/helper/Seeder');


// MongoDB 
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');

mongoose.connection.on('open', function () {
    seeder.populateDB;
});


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

var port = process.env.PORT || 8888;
app.listen(port, function() {
 console.log("Listening on " + port);
});