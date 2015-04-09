var express = require("express");
var http = require('http');
var app = express();
//var server = http.createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var seeder = require('./helper/Seeder');

// MongoDB
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');
mongoose.connection.on('open', function () {
    seeder.populateDB;
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


/* Login page */
app.get( '/', router.login);
// Student page
app.get('/student_Sign_up',router.studentSignup);
// get users
app.get('/api/userlist',router.user);
//Add Users
app.post('/api/addUser',router.addNewUser);


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});