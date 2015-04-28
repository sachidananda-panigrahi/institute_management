console.log('DB Loaded...');
define(["js/utilities/Constant"], function (CONSTANTS) {
    function WebSql() {
        this.WebSqldb = {};

    }



    // Creates new database or opens an existing one.
    // <String> dbSize - Size of the DB.
    WebSql.prototype.open = function () {

        this.WebSqldb = openDatabase(CONSTANTS.DB.DB_NAME, CONSTANTS.DB.DB_VERSION, CONSTANTS.DB.DB_DISPLAY_NAME, CONSTANTS.DB.DB_SIZE);

        var $deferred = new $.Deferred();
        try {
            $deferred.resolve(true);
        } catch (error) {
            // Return error.
            $deferred.reject(false);
            console.log("Error in OpenDb " + error.message);
        } finally {

        }
        return $deferred.promise();
    }

    // Creates new tables in the DB.
    WebSql.prototype.createTables = function () {

        this.WebSqldb.transaction(function (tx) {

//            tx.executeSql('CREATE TABLE IF NOT EXISTS users (username, password)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS userdetails (firstname, lastname, email, password, dob, gender )');
            console.log('DB created..');

        });

    };

    // Insert data into tables in the DB.
    WebSql.prototype.insertData = function () {
        this.WebSqldb.transaction(function (tx) {
            tx.executeSql('INSERT INTO users (username, password) VALUES ("pramod", "pramod123")');
            tx.executeSql('INSERT INTO users (username, password) VALUES ("admin", "admin123")');

           // tx.executeSql('INSERT INTO userdetails (firstname, lastname, email, password) VALUES ("Pramod", "Bhoi", "p@g.com", "p123" )');
            console.log('DB inserted..');
        });

    };

    WebSql.prototype.insertDataIntoTables = function (eventData) {
        console.log(eventData);
        var $deferred = new $.Deferred();
        var dbObj = {};

        for(var index in eventData){
               //dbObj = eventData[index];
                dbObj[eventData[index].name] = eventData[index].value;

        }
        var dateOfBirth = new Date(dbObj.year, dbObj.month-1, dbObj.day);
        console.log(dateOfBirth);

        console.log(dbObj);

        this.WebSqldb = openDatabase(CONSTANTS.DB.DB_NAME, CONSTANTS.DB.DB_VERSION, CONSTANTS.DB.DB_DISPLAY_NAME, CONSTANTS.DB.DB_SIZE);
        this.WebSqldb.transaction(function (tx) {
            //tx.executeSql('INSERT INTO userdetails (firstname, lastname, email, password) VALUES ("Pramod", "Bhoi", "p@g.com", "p123" )');

            tx.executeSql('INSERT INTO userdetails (firstname, lastname, email, password, dob, gender) VALUES (?,?,?,?,?,?)',[dbObj.firstname, dbObj.lastname, dbObj.email, dbObj.password,dateOfBirth, dbObj.gender], function(tx) {
                $deferred.resolve();
            });
        });

        return $deferred.promise();

    };



    // delete tables in the DB.
    WebSql.prototype.deleteTables = function (users) {

        this.WebSqldb.transaction(function (tx) {
            tx.executeSql('DROP TABLE users');
            console.log('delete table');
        });

    };

    // retrieve data from the DB.
    WebSql.prototype.retrieveLoginData = function () {
        console.log('retrieveLoginData');
        var tempData = [];
        var $deferred = new $.Deferred();

        this.WebSqldb.transaction(function (tx) {
            var retrieveData = 0;
            var retrieveData = tx.executeSql('SELECT email, password FROM userdetails', [],
                function (tx, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            tempData.push(result.rows.item(i));
                        }
//                        console.log('tempData');
//                        console.log(tempData);
                        $deferred.resolve(tempData);
                    }
                });


        });
        //console.log('tempData');
        // console.log(tempData);
        return $deferred.promise();
    }

    return WebSql;

});