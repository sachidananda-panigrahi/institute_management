console.log('StudentModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager',  'js/server/WebSql'], function(CONSTANTS, ServiceManager, WEBSQL){

    function StudentModel(){
        console.log('StudentModel initiated...');
        this.serviceManagerObject = new ServiceManager();
        this.webSqqlObject = new WEBSQL();

    }

    StudentModel.prototype.submitLoginForm = function(eventData){
        console.log("Submit Login Form...");
        console.log(eventData);

        this.webSqqlObject.insertDataIntoTables(eventData).done(function(){
           console.log("Data inserted .......")
        });
    }




    return StudentModel;
});