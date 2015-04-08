console.log('DB Loaded...');
define(["js/utilities/Constant"], function (CONSTANTS) {
    function WebSql() {
        var WebSqldb = {};

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
        console.log(this.WebSqldb);
        this.WebSqldb.transaction(function (tx) {

            tx.executeSql('CREATE TABLE IF NOT EXISTS users (username, password)');
            console.log('DB created..');

        });

    }

    // Insert data into tables in the DB.
    WebSql.prototype.insertDataIntoTables = function () {
        this.WebSqldb.transaction(function (tx) {
            tx.executeSql('INSERT INTO users (username, password) VALUES ("pramod", "pramod123")');
            tx.executeSql('INSERT INTO users (username, password) VALUES ("admin", "admin123")');

        });

    }

    // delete tables in the DB.
    WebSql.prototype.deleteTables = function (tableName) {
        this.WebSqldb.transaction(function (tx) {
            tx.executeSql('DROP TABLE tableName');
        });

    }

    // retrieve data from the DB.
    WebSql.prototype.retrieveLoginData = function () {
        console.log('retrieveLoginData');
        var tempData = [];
        var $deferred = new $.Deferred();

        this.WebSqldb.transaction(function (tx) {
            var retrieveData = 0;
            var retrieveData = tx.executeSql('SELECT * FROM users', [],
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