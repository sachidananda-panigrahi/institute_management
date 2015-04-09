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
module.exports.addNewUser = function(req, res){
    console.log(req.body);
    res.redirect('/');

/*//    console.log(req.body[0].value);
    var userDetail = {};

    for(var index in req.body){
        userDetail[req.body[index].name] = req.body[index].value;
    }
//    console.log(userDetail);
    var createUser = {
        firstname: userDetail.firstname,
        lastname: userDetail.lastname,
        email: userDetail.email,
        mobile: userDetail.mobile,
        city: userDetail.city,
        state: userDetail.state,
        motherTongue: userDetail.motherTongue,
        nationality: userDetail.nationality,
        password: userDetail.password,
        birthdate: new Date(parseInt(userDetail.year), parseInt(userDetail.month)-1, parseInt(userDetail.day), 12, 00, 00),
        gender: userDetail.gender,
        status: 'active'
    };

    userController.addUser(createUser).done(function (user) {
        if(user){
            console.log(user);
            res.render('login');
        }

    });*/

};
