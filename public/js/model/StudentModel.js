console.log('StudentModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager'], function(CONSTANTS, ServiceManager){

    function StudentModel(){
        console.log('StudentModel initiated...');
        this.username = null;
        this.serviceManagerObj = new ServiceManager();
    }

    StudentModel.prototype.submitLoginForm = function(eventData){
        console.log("Submit Login Form...");
        console.log(eventData);
        this.validateEmail(eventData);
    };
    StudentModel.prototype.fetchLoginData = function(username, password){
        console.log("fetchLoginData");
        var that = this;
        var serviceObj = {};
        serviceObj.url = CONSTANTS.API.LOGIN;
        serviceObj.headers = CONSTANTS.HEADER;
        serviceObj.type = CONSTANTS.METHOD_GET;
        serviceObj.data = {};

        this.serviceManagerObject.doServiceCall(serviceObj).done(function(serviceData){
            that.checkLogedinCredentials(serviceData);
        }).fail(function (error) {
            console.log(error)
        });
    };
    StudentModel.prototype.validateEmail = function(eventData){

        for(var i = 0; i < eventData.length; i++){
            var obj = eventData[i];
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.USERNAME){
                this.username = obj.value;
            }
        }

    };

    StudentModel.prototype.addNewUserData = function(eventData){

    };


    return StudentModel;
});