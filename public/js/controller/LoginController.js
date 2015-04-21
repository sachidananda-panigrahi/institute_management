console.log('loginController loaded...');
define(['js/utilities/Constant',
    'js/model/LoginModel',
    'js/lib/jquery.validate.min',
    'js/lib/jquery-ui-1.10.3.min.js',
    'js/lib/bootstrap.min.js',
    'js/lib/raphael-min.js',
    'js/lib/plugins/morris/morris.min.js',
    'js/lib/plugins/sparkline/jquery.sparkline.min.js',
    'js/lib/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'js/lib/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'js/lib/plugins/fullcalendar/fullcalendar.min.js',
    'js/lib/plugins/jqueryKnob/jquery.knob.js',
    'js/lib/plugins/daterangepicker/daterangepicker.js',
    'js/lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    'js/lib/plugins/iCheck/icheck.min.js','js/lib/AdminLTE/app.js',
    'js/lib/AdminLTE/dashboard.js'], function(CONSTANT, LOGINMODEL){
	'use strict';

	function LoginController(){
		console.log('loginController instantiated...');
        // this.loginModel = new LOGINMODEL();
        // this.addEventListeners();
        // this.reauthEmail = document.getElementById('reauth-email');
        // this.reauthEmail.style.display = 'none';
        this.emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        this.validateLog = null;
        this.validateForm();
	}


    LoginController.prototype.validateForm = function(){
        $('#loginForm').validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                    /*remote: {
                        url: "/api/userpresent",
                        type: "post"
                     }
                    */// notEqual: user
                },
                password: {
                    required: true,
                    minlength: 5,
                }
            },
            messages: {
                email: {
                    required: 'Please enter your email',
                    email:'Please enter a valid email',
                    // remote: "Email already in use!"
                },
                password: {
                    required: 'Please enter your password',
                    minlength: 'Password must be greater than 5 characters'
                }
            }
        });
    }

    LoginController.prototype.addEventListeners = function(){
        console.log("addEventListeners");
        var formEvent = document.getElementById('loginForm');
        // $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }
    LoginController.prototype.formSubmitHandler = function(event){
        console.log("formSubmitHandler");

        var that = event.data.context;
        that.eventData = $(event.currentTarget).serializeArray();
        this.validateLog = 0;
        // console.log(that.eventData);
        for ( var index in that.eventData )
        {
            var empobj = that.eventData[index];

            if(empobj.value !== null && empobj.value !== ''){
                $(document.getElementsByName(empobj.name)[0]).removeClass("error");
                if(empobj.name == 'email'){
                    if (!(that.emailRegex.test(empobj.value))) {
                        $(document.getElementsByName('email')[0]).addClass("error");
                    }else{
                        this.validateLog ++;
                    }
                }else if(empobj.name == 'password'){
                    this.validateLog ++;
                }
            }else{
                if(empobj.name == 'email'){
                    $(document.getElementsByName('email')[0]).addClass("error");
                }else if(empobj.name == 'password'){
                    $(document.getElementsByName('password')[0]).addClass("error");
                }
            }
        }

        if(this.validateLog == that.eventData.length ){
            that.loginModel.validateLoginForm(that.eventData).done(function(){
                that.loginSuccess();
            }).fail(function (error) {
                console.log(error)
            });
        }
        
        
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