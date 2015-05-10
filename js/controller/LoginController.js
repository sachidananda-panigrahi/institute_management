console.log('loginController loaded...');
define(['js/utilities/Constant','js/model/LoginModel'], function(CONSTANT, LOGINMODEL){
	'use strict';


	function LoginController(){
		console.log('loginController instantiated...');
        this.loginModel = new LOGINMODEL();
        this.addEventListeners();
	}

    LoginController.prototype.addEventListeners = function(){
        console.log("addEventListeners");
        var formEvent = document.getElementById('loginForm');
        $(formEvent.children.submitform).bind('click', this.formValidate);

        $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }
    LoginController.prototype.formSubmitHandler = function(event){
        console.log("formSubmitHandler");
        var that = event.data.context;
        that.eventData = $(event.currentTarget).serializeArray();
        //location.href = 'students.html';
        console.log(that.eventData);
        validate();
        that.loginModel.validateLoginForm(that.eventData);
    }
    LoginController.prototype.formValidate = function(){
        var formID = document.getElementById('loginForm');
        var emailPat = /^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/;
        var Emailmatch = formID.children.email.value.match(emailPat);

        if ( formID.children.email.value == "")
        {
            alert("Enter your email");
            return false;
        }
        if (Emailmatch == null) {
            alert("Your email address seems incorrect. Please try again.");
            return false;
        }
        if(formID.children.password.value == ""){
            alert("Enter your password");
            return false;
        }

    }



    return LoginController;
});