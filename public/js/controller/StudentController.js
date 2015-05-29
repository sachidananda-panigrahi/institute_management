console.log('StudentController loaded...');
define(['js/utilities/Constant','js/model/StudentModel','js/lib/jquery.validate.min', 'js/lib/additional-methods.min'], function(CONSTANT, STUDENTNMODEL, validate, additional){
	'use strict';

	function StudentController(){
		console.log('StudentController instantiated...');
        this.studentModel = new STUDENTNMODEL();
        this.mainWrap = document.getElementById('wrap');
        this.pageHeight = window.outerHeight;
        this.validateForm();
        this.styles();
        // this.addEventListeners();
        
	}
    
    StudentController.prototype.addEventListeners = function(){
        //console.log("addEventListeners");
        var formEvent = document.getElementById('studentForm');
        $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }

    StudentController.prototype.styles = function(){
        $(this.mainWrap).css({'min-height': this.pageHeight-63})
    }

    StudentController.prototype.validateForm = function(){
        var flag;
        $('#profile_pic').change(function(){
                var _URL = window.URL;
                var  img, file;
                if ((file = this.files[0])) {
                    img = new Image();
                    img.onload = function () {
                        console.log("Width:" + this.width + "   Height: " + this.height);//this will give you image width and height and you can easily validate here....
                        if(this.width == 128 && this.height == 128){
                            flag = true;
                        }else{
                            flag = false;
                        }
                    };
                    img.src = _URL.createObjectURL(file);
                }
            
        })
        
        $.validator.addMethod('imagedim', function(value, element) {
            // console.log(flag)
            return flag;    
        });

        $.validator.addMethod("uploadFile", function (val, element) {
            // var ext = $(element).val().split('.').pop().toLowerCase();
            // console.log(ext);
            // var allow = new Array('jpg');
            var size = element.files[0].size;
            if ( size > 51200) {
                return false;
            } else {
                return true;
            }

        });

        $('#studentForm').validate({
            errorClass: "error",
            validClass: "success",
            rules: {
                firstname: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                },
                lastname: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                },
                email: {
                    required: true,
                    email: true,
                    remote: {
                        url: "/api/userpresent",
                        type: "post"
                     }
                    // notEqual: user
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    number: true
                },
                city: {
                    required: true,
                    minlength: 2,
                },
                state: {
                    required: true,
                    minlength: 2,
                },
                mother_tongue: {
                    required: true,
                    minlength: 2,
                },
                nationality: {
                    required: true,
                    minlength: 2,
                },
                password: {
                    required: true,
                    minlength: 5,
                },
                confirm_password: {
                    required: true,
                    equalTo: '#password',
                },
                profile_pic: {
                    required: true,
                    accept: "image/*",
                    extension: "jpeg|png|jpg",
                    uploadFile: true,
                    imagedim: true
                },
                gender: {
                    required: true,
                }
            },
            messages: {
                firstname: {
                 required:'Please enter your firstname',
                 minlength:'Firstname must consist of at least two character',
                 maxlength:'Firstname must not greater than 10 characters'
                },
                lastname: {
                    required:'Please enter your lastname',
                    minlength:'Lastname must consist of at least two character',
                    maxlength:'Lastname must not greater than 10 characters'
                },
                email: {
                    required: 'Please enter your email',
                    email:'Please enter a valid email',
                    remote: "Email already in use!"
                },
                mobile: {
                    required: 'Please enter your mobile number',
                    minlength: 'Please enter a valid mobile number',
                    maxlength: 'Please enter a valid mobile number',
                    number: 'Please enter a valid mobile number'
                },
                city: {
                    required: 'Please enter your city',
                    minlength: 'Please enter a valid city details'
                },
                state: {
                    required: 'Please enter your state',
                    minlength: 'Please enter a valid state details'
                },
                mother_tongue: {
                    required: 'Please enter your mother tongue',
                    minlength: 'Please enter a valid mother tongue details'
                },
                nationality: {
                    required: 'Please enter your nationality',
                    minlength: 'Please enter a valid nationality details'
                },
                password: {
                    required: 'Please enter your password',
                    minlength: 'Password must be greater than 5 characters'
                },
                confirm_password: {
                    required: 'Please confirm your password',
                    equalTo: 'confirm password must equal with password'
                },
                profile_pic: {
                    required: 'Please choose your profile picture',
                    accept: 'Please choose a image file',
                    extension: 'Please choose a image file in format of JPEG/PNG',
                    uploadFile: 'Maximum size allowed 50kb',
                    imagedim: 'Image resolution must be 128*128'
                },
                gender: {
                    required: 'Please enter your gender'
                }
            }
        });
    }

    StudentController.prototype.formSubmitHandler = function(event){
        var that = event.data.context;
        var temp;

        that.eventData = $(event.currentTarget).serializeArray();
        //console.log(that.eventData);

        that.studentModel.submitLoginForm(that.eventData).done(function(user){
            temp = user;  
            alert(user)

        });


        // console.log(temp);
        return false;
    }
	
	return StudentController;
});