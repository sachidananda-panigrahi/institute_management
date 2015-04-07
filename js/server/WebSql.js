console.log('DB Loaded...');
define(["js/utilities/Constant"], function(CONSTANTS){
    function WebSql() {
        var WebSqldb = {};
    }


    // Creates new database or opens an existing one.
    //            <String> dbSize - Size of the DB.
    WebSql.prototype.open = function () {
        this.WebSqldb = null;
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
    };

    // Creates new tables in the DB.
    WebSql.prototype.createTables = function () {
        console.log(this.WebSqldb);
        var db = this.WebSqldb;
        db.transaction(function (tx) {

            tx.executeSql('CREATE TABLE IF NOT EXISTS users (username, password)');
            console.log('DB created..');

        });

    };

    // Insert data into tables in the DB.
    WebSql.prototype.insertTables = function () {
        var db = this.WebSqldb;
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO users (username, password) VALUES ("pramod", "pramod123")');
            tx.executeSql('INSERT INTO users (username, password) VALUES ("admin", "admin123")');

        });

    };

    // delete tables in the DB.
    WebSql.prototype.deleteTables = function () {
        var db = this.WebSqldb;
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE users');
        });

    };

    return WebSql;

});