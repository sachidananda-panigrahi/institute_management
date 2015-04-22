var express = require("express");
var session = require('express-session');
var http = require('http');

//var server = http.createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var seeder = require('./helper/Seeder');
var passport = require('passport');
var app = express();
var flash = require('connect-flash');

// MongoDB
var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');
mongoose.connection.on('open', function () {
    seeder.populateDB;
});

// Configuring Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuring Session
app.use(session({
    secret: '84uw9qrjg93y2tq9hr9eh43qhfre9f7h3478ffkdsjgklhm4i493tudf',
    saveUninitialized: true,
    resave: true,
    cookie:{maxAge:604800000} /* 1 week 604800000 */ /* For testing : 2 min : 100000 */
}));

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());

var initPassport = require('./passport/init');
initPassport(passport);

app.use(flash());

// Store the user login credential
var loggedIn = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
};
// console.log(loggedIn);
// Login page
app.get( '/', router.login);
app.get('/logout', router.logout);
//validate login
app.post('/login_method', router.loginMethod);
// Student page
app.get('/student_sign_up', router.studentSignup);
// Student page
app.get('/dashboard', loggedIn, router.adminDashboard);
// get users
app.get('/api/userlist',router.user);
// check user exist
app.post('/api/userpresent',router.userpresent);
//Add Users
app.post('/api/addUser',router.addNewUser);

// Configuring PORT
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});