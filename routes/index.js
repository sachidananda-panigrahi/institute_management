var passport = require('passport');
var userController = require('../controller/userController').UserController;
var CONSTANT = require('../utilities/Constant').CONSTANTS;
var bCrypt = require('bcrypt-nodejs');

module.exports.login = function (req, res) {
    res.render('login', {message: req.flash('loginMessage'), pagetitle: 'Login', passchange: req.flash('passchange')});
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports.loginMethod = passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: 'Invalid username or password.'
});
/*=======================Dash Board Starts==================================*/
module.exports.adminDashboard = function(req, res){
    var locals = {}
    locals.new_members = 0;
    locals.userDetail = req.user;
    // console.log(req.user);
    userController.getAllUsers().done(function (users) {
        if(users){
            // console.log(users);
            for (var index in users) {
                if(new Date(users[index].created_at).getMonth() == new Date().getMonth()){
                    locals.new_members ++ 
                    // console.log(locals.new_members)
                }
            };
        }
        res.render('dashboard', locals);
    });
    
};
/*=======================Dash Board Ends==================================*/
module.exports.studentSignup = function(req, res){
    var locals = {};
    locals.months = CONSTANT.MONTHS;
    res.render('student_signup', locals);
};
module.exports.user = function (req, res) {
    userController.getAllUsers().done(function (users) {
        // console.log(users[0]);
        res.send(users);
    });
};
module.exports.userpresent = function (req, res) {
    // console.log(req.body.email);
    userController.getUserByEmailId(req.body.email).done(function (user) {
        if(user){
            res.send(false);
        }else{
            res.send(true);
        }

    });
};
module.exports.addNewUser = function(req, res){
    
    // console.log(req.body.firstname);
    // res.redirect('/');

//    console.log(req.body[0].value);
    /*var userDetail = {};

    for(var index in req.body){
        userDetail[req.body[index].name] = req.body[index].value;
    }*/
//    console.log(userDetail);
    var createUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
        state: req.body.state,
        mother_tongue: req.body.motherTongue,
        nationality: req.body.nationality,
        password: bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null),
        birthdate: new Date(parseInt(req.body.year), parseInt(req.body.month)-1, parseInt(req.body.day), 12, 00, 00),
        gender: req.body.gender,
        created_at: new Date(),
        status: 'active'
    };

    userController.addUser(createUser).done(function (user) {
        if(user){
            // console.log(user);
            res.redirect('/');
        }

    });
    

};
