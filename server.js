var express = require("express");
var http = require('http');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var seeder = require('./helper/Seeder');
var sassMiddleware = require('node-sass-middleware');
var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/css';

//server.configure(function(){

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(app.router);

// notice that the following line has been removed
// app.use(express.static(__dirname + '/public'));

// adding the sass middleware
app.use('/css', sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'expanded'
}));

// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'public' ) ) );
//});


// MongoDB 
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');

mongoose.connection.on('open', function () {
    seeder.populateDB;
});


/* Login page */
app.get( '/', router.login);
// Student page
app.get('/student_Sign_up',router.studentSignup);
// get users
app.get('/api/userlist',router.user);


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});