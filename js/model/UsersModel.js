console.log('UsersModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager',  'js/server/WebSql'], function(CONSTANTS, ServiceManager, WEBSQL){

    function UsersModel(){
        console.log('UsersModel' +
            ' initiated...');
        this.serviceManagerObject = new ServiceManager();
        this.webSqqlObject = new WEBSQL();

    }

    UsersModel.prototype.submitLoginForm = function(eventData){
        console.log("Submit Login Form...");
        console.log(eventData);

        this.webSqqlObject.insertDataIntoTables(eventData).done(function(){
           console.log("Data inserted .......")
            alert("Data inserted .......");

        });
    }




    return UsersModel;
});