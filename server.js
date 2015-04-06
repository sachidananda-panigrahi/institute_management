var express = require("express");
var http = require('http');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var seeder = require('./helper/Seeder');
var sass    = require('node-sass');


app.configure(function(){

  server.set('views', __dirname + '/views');
  server.set('view engine', 'jade');
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  // app.use(app.router);

  // notice that the following line has been removed
  // app.use(express.static(__dirname + '/public'));

  // adding the sass middleware
  server.use(
     sass.middleware({
         src: __dirname + '/sass', 
         dest: __dirname + '/public/css',
         debug: true,       
     })
  );   

  // The static middleware must come after the sass middleware
  server.use(express.static( path.join( __dirname, 'public' ) ) );
});


// MongoDB 
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');

mongoose.connection.on('open', function () {
    seeder.populateDB;
});


/* Login page */
server.get( '/', router.login);
// Student page
server.get('/student_Sign_up',router.studentSignup);
// get users
server.get('/api/userlist',router.user);


var port = process.env.PORT || 3000;
server.listen(port, function() {
 console.log("Listening on " + port);
});