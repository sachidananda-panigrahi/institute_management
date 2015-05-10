console.log('UsersController loaded...');
define(['js/utilities/Constant','js/model/UsersModel'], function(CONSTANT, USERSMODEL){
	'use strict';


	function UsersController(){
		console.log('UsersController instantiated...');
        this.usersModel = new USERSMODEL();
        this.addEventListeners();
	}

    UsersController.prototype.addEventListeners = function(){
        //console.log("addEventListeners");
        var formEvent = document.getElementById('studentForm');
        $(studentForm.children.signupBtn).bind('click', this.formValidate);

        $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }
    UsersController.prototype.formSubmitHandler = function(event){
        var that = event.data.context;
        console.log(that);
        that.eventData = $(event.currentTarget).serializeArray();
        //console.log(that.eventData);
        that.usersModel.submitLoginForm(that.eventData);
    }
    UsersController.prototype.formValidate = function(){
        var formsubmit = document.getElementById('studentForm');

        //Name
        if($(formsubmit).find('#fname').val() == ""){
            alert("Enter your Name..!");
            return false;
        }
        //email check
        var emailPat = /^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/;
        var Emailmatch = formsubmit.children.email.value.match(emailPat);
        if ( formsubmit.children.email.value == "")
        {
            alert("Enter your email..!");
            return false;
        }
        if (Emailmatch == null) {
            alert("Your email address seems incorrect. Please try again..!");
            return false;
        }
        // password
        if(formsubmit.children.password.value == ""){
            alert("Enter your password..!");
            return false;
        }
        //confirm password
        if(formsubmit.children.confirm_password.value == ""){
            alert("Enter your confirm password..!");
            return false;
        }
        //confirm password check
        if(formsubmit.children.confirm_password.value !== formsubmit.children.password.value){
            alert("Enter your correct password..!");
            return false;
        }
        if(isNaN($(formsubmit).find('#month').val()) || isNaN($(formsubmit).find('#day').val()) || isNaN($(formsubmit).find('#year').val()) ){
            alert("Enter your date of birth..!");
            return false;
        }
        if($(formsubmit).find('#male').checked == false || $(formsubmit).find('#female').checked == false ){
            alert("Select your gender..!");
            return false;
        }
    }



	return UsersController;
});