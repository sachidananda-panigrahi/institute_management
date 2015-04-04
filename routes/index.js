var userController = require('../controller/userController').UserController;

module.exports.login = function (req, res) {
	res.render('login');
}

module.exports.user = function (req, res) {
	userController.getAllUsers().done(function (users) {
        console.log(users[0]);
        res.send(users);
    });
}