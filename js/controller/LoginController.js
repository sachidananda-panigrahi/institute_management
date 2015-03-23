console.log('loginController loaded...');
define(['js/utilities/Constant','js/utilities/ServiceManager','js/utilities/NavigationManager','js/model/LoginModel'], function(CONSTANT, SERVICEMANAGER, NAVIGATIONMANAGER, LOGINMODEL){
	'use strict';


	function LoginController(){
		console.log('loginController instantiated...');
        this.loginModel = new LOGINMODEL();
		console.log(CONSTANT.NAME);

	}

    LoginController.prototype.validateLoginController = function(data){
        console.log(data);
        this.loginModel
    };
	
	return LoginController;
});