console.log('LoginModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager'], function(CONSTANTS, ServiceManager){

    function LoginModel(){
        console.log('LoginModel Loaded...');
        this.username = null;
        this.password = null;
        this.serviceManagerObject = new ServiceManager();
    }

    LoginModel.prototype.validateLoginForm = function(eventData){
        console.log("validateLoginForm");
        for(var i = 0; i < eventData.length; i++){
            var obj = eventData[i];
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.USERNAME){
                this.username = obj.value;
            }
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.PASSWORD){
                this.password = obj.value;
            }
        }
        this.fetchLoginData(this.username, this.password);
    }
    LoginModel.prototype.fetchLoginData = function(username, password){
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
    }

    LoginModel.prototype.checkLogedinCredentials = function(serverData){
        //debugger;
        //alert('doservice call');
        var userfound = false;
        for ( var index in serverData.students )
        {
            var empobj = serverData.students[index];
            if(empobj.user== this.username && empobj.password== this.password){
                userfound = true;
                break;
            }
        }
        if(userfound){
            location.href = 'students.html';
        }else{
            alert('incorect credentials');
        }
    }

    return LoginModel;
});