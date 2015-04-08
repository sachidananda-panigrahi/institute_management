console.log('ServiceManager Loaded...');
define(['js/utilities/Constant', 'js/server/WebSql'], function(CONSTANTS, WEBSQL){
    function ServiceManager(){
        console.log('ServiceManager Loaded...');
        this.url = null;
        this.data = null;
        this.type = null;
        this.header = null;
    };



//Setter
    ServiceManager.prototype.setURL = function(surl){
        if(surl){
            this.url= surl;
        }
    }
    ServiceManager.prototype.setData = function(sdata){
        if(sdata){
            this.data = JSON.stringify(sdata);
        }
    }
    ServiceManager.prototype.setType = function(stype){
        if(stype){
            this.type = stype;
        }
    }
    ServiceManager.prototype.setHeader = function(sheader){
        if(sheader){
            this.header = sheader;
        }
        else{
            this.header = CONSTANTS.HEADER;
        }
    }

//Getter
    ServiceManager.prototype.getURL = function(){
        return this.url;
    };
    ServiceManager.prototype.getData = function(){
        return this.data;
    };
    ServiceManager.prototype.getType = function(){
        return this.type;
    };
    ServiceManager.prototype.getHeader = function(){
        return this.header;
    };

//
    ServiceManager.prototype.doServiceCall = function(serviceObj){
        var $deferred = new $.Deferred();

        this.setHeader(serviceObj.header);
        this.setURL(serviceObj.url);
        this.setType(serviceObj.type);
        this.setData(serviceObj.data);

        $.ajax(this.getURL(), {
            type: this.getType(),
            headers: this.getHeader(),
            data: this.getData(),
            success:function(serverData){
                $deferred.resolve(serverData);
            },
            error:function(error){
                $deferred.reject(error);
            }

        });
        return $deferred.promise();
    }

<<<<<<< HEAD
    //DB Service
    ServiceManager.prototype.doServerDataCall = function(serverObj){
        var $deferred = new $.Deferred();

        this.setHeader(serverObj.header);
        this.setURL(serverObj.url);
        this.setType(serverObj.type);
        this.setData(serverObj.data);

        this.webSqlObj = new WEBSQL();
        this.webSqlObj.open();
        this.webSqlObj.createTables();
        //this.webSqlObj.insertTables();
        this.webSqlObj.retrieveLoginData().done(function(serverData){
            console.log('serverData in service mgr')
            console.log(serverData)
            $deferred.resolve(serverData);
        })


        return $deferred.promise();
    }
=======
//    ServiceManager.prototype.doDataBaseCall = function(){
//        this.webSqlObj = new WEBSQL();
//        this.webSqlObj.retrieveLoginData();
//        console.log('doDataBaseCall...');
//    }
>>>>>>> 9b976531ea9680deb988e4e73508b4943bcfcc25

    return ServiceManager;
});