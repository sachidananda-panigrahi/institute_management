var userController = require('../controller/userController').UserController;

module.exports.login = function (req, res) {
	res.sendfile('views/login.html');
}

module.exports.user = function (req, res) {
	userController.getAllUsers().done(function (users) {
        console.log(users[0]);
        res.send(users);
    });
}