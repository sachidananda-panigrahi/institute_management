var userController = require('../controller/userController').UserController;
var CONSTANT = require('../utilities/Constant').CONSTANTS;
module.exports.login = function (req, res) {
    res.render('login');
};
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
        motherTongue: req.body.motherTongue,
        nationality: req.body.nationality,
        password: req.body.password,
        birthdate: new Date(parseInt(req.body.year), parseInt(req.body.month)-1, parseInt(req.body.day), 12, 00, 00),
        gender: req.body.gender,
        status: 'active'
    };

    userController.addUser(createUser).done(function (user) {
        if(user){
            // console.log(user);
            res.redirect('/');
        }

    });
    

};
