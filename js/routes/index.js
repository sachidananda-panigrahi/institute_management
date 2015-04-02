var userController = require('../controller/userController').UserController;

module.exports.login = function (req, res) {
	res.sendfile('login.html');
}

module.exports.user = function (req, res) {
	userController.getAllUsers().done(function (users) {
        console.log(users);
    });
}