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