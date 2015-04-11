console.log('StudentModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager'], function(CONSTANTS, ServiceManager){

    function StudentModel(){
        console.log('StudentModel initiated...');
        this.username = null;
        this.userfound = null;
        this.eventData = null;
        this.serviceManagerObj = new ServiceManager();
        this.$deferred = new $.Deferred();
    }

    StudentModel.prototype.submitLoginForm = function(eventData){
        console.log("Submit Login Form...");
        console.log(eventData);
        this.eventData = eventData;
        this.validateEmail(eventData);
        return this.$deferred.promise();
    };

    StudentModel.prototype.validateEmail = function(eventData){

        for(var i = 0; i < eventData.length; i++){
            var obj = eventData[i];
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.USERNAME){
                this.username = obj.value;
            }
        }
        this.fetchUserData();
    };
    StudentModel.prototype.fetchUserData = function(){
        console.log("fetchLoginData");
        var that = this;
        var serviceObj = {};
        serviceObj.url = CONSTANTS.API.LOGIN;
        serviceObj.headers = CONSTANTS.HEADER;
        serviceObj.type = CONSTANTS.METHOD_GET;
        serviceObj.data = {};

        this.serviceManagerObj.doServiceCall(serviceObj).done(function(serviceData){
            that.checkUserExist(serviceData);
        }).fail(function (error) {
            console.log(error)
        });
    };

    StudentModel.prototype.checkUserExist = function(serverData){
        for ( var index in serverData )
        {
            var empobj = serverData[index];
            // console.log(empobj.username);
            // console.log(empobj.password);
            if(empobj.email == this.username ){
                this.userfound = empobj.email;
                break;
            }
        }
        if(this.userfound){
            this.$deferred.resolve(false);
        }else{
            this.$deferred.resolve(true);
        }
    };
  /*  StudentModel.prototype.addNewUserData = function(){
        console.log("addNewUserData");
        var that = this;
        var serviceObj = {};
        serviceObj.url = CONSTANTS.API.ADDUSER;
        serviceObj.headers = CONSTANTS.HEADER;
        serviceObj.type = CONSTANTS.METHOD_POST;
        serviceObj.data = this.eventData;

        this.serviceManagerObj.doServiceCall(serviceObj).done(function(serviceData){
//            that.checkUserExist(serviceData);
//            location.href = '/';
            console.log("data added successfully");
        }).fail(function (error) {
            console.log(error)
        });
    };*/


    return StudentModel;
});