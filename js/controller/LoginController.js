console.log('loginController loaded...');
define(['js/utilities/Constant','js/utilities/ServiceManager','js/utilities/NavigationManager','js/model/LoginModel'], function(CONSTANT, SERVICEMANAGER, NAVIGATIONMANAGER, LOGINMODEL){
	'use strict';
	
	function LoginController(){
		console.log('loginController instantiated...');
		console.log(CONSTANT.NAME);

	}
	
	return LoginController;
});