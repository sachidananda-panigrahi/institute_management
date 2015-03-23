console.log('LoginModel Loaded...');
define(['js/utilities/Constant'], function(CONSTANTS){

    function LoginModel(){
        console.log('LoginModel Loaded...');
    }
    var username = '';
    var password = '';
    LoginModel.prototype.validateLoginModel = function(data){
        for(var i = 0; i < data.length; i++){
            var obj = data[i];
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.USERNAME){
                username = obj.value;
            }
            if(obj.name == CONSTANTS.DOM_ACCESS.LOGIN.PASSWORD){
                password = obj.value;
            }
        }
    };

    return LoginModel;
});