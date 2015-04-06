console.log('loginController loaded...');
define(['js/utilities/Constant','js/model/LoginModel'], function(CONSTANT, LOGINMODEL){
	'use strict';


	function LoginController(){
		console.log('loginController instantiated...');
        this.loginModel = new LOGINMODEL();
        this.addEventListeners();
        this.reauthEmail = document.getElementById('reauth-email');
        this.reauthEmail.style.display = 'none';
	}

    LoginController.prototype.addEventListeners = function(){
        console.log("addEventListeners");
        var formEvent = document.getElementById('loginForm');
        $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }
    LoginController.prototype.formSubmitHandler = function(event){
        console.log("formSubmitHandler");
        var that = event.data.context;
        that.eventData = $(event.currentTarget).serializeArray();
        //location.href = 'students.html';
        console.log(that.eventData);
        that.loginModel.validateLoginForm(that.eventData).done(function(){
            that.loginSuccess();
        }).fail(function (error) {
            console.log(error)
        });
        
    }
    LoginController.prototype.loginSuccess = function(){
        // console.log(this.loginModel.loginSuccess());
        if(this.loginModel.loginSuccess()){
            location.href = '/student_Sign_up';
            this.reauthEmail.style.display = 'none';
        }else{
            this.reauthEmail.style.display = 'block';
        }
        
    }
	
	return LoginController;
});