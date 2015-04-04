var userController = require('../controller/userController').UserController;
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});
module.exports.login = function (req, res) {
    requirejs(['../public/js/controller/LoginController'],
        function   (LoginController) {
            var loginControllerObject = new LoginController();
            res.render('login',loginControllerObject);
        });

}

module.exports.user = function (req, res) {
	userController.getAllUsers().done(function (users) {
        console.log(users[0]);
        res.send(users);
    });
}