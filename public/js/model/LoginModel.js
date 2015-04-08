console.log('LoginModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager'], function(CONSTANTS, ServiceManager){

    function LoginModel(){
        console.log('LoginModel Loaded...');
        this.$deferred = new $.Deferred();
        this.username = null;
        this.password = null;
        this.userfound = false;
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
        return this.$deferred.promise();

    };
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
    };

    LoginModel.prototype.checkLogedinCredentials = function(serverData){
        //debugger;
        //alert('doservice call');
        // console.log(serverData);
        this.userfound = false;
        for ( var index in serverData )
        {
            var empobj = serverData[index];
            // console.log(empobj.username);
            // console.log(empobj.password);
            if(empobj.email == this.username && empobj.password == this.password){
                this.userfound = true;
                break;
            }
        }
        this.$deferred.resolve();
        
        
    }
    LoginModel.prototype.loginSuccess = function(){
        return this.userfound;
    }

    return LoginModel;
});