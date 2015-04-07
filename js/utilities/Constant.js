console.log('Constant Loaded...');
define([], function(){

    var CONSTANTS = {
        DOM_ACCESS:{
            LOGIN:{
                USERNAME: 'email',
                PASSWORD: 'password'
            }
        },

        API:{
            LOGIN: 'js/server/LoginData.json'
        },

        DB: {
            DB_NAME: "InstituteDB",

            DB_VERSION: "1.0",

            DB_DISPLAY_NAME: "InstituteDB 1.0",

            DB_SIZE: 10 * 1024 * 1024,

            DB_TABLE_CREATION_CHECK: "areDBTablesCreated",

            DB_CURRENT_USER: "currentUserID"
        },

        DB_TABLES: {
            USER_TABLE: "users",
            STUDENT_TABLE: "STUDENTS",
            EMPLOYEES_TABLE: "EMPLOYEES",
            MESSAGES_TABLE: "MESSAGES",
            ATTENDANCE_TABLE: "ATTENDANCE",
            LOCATIONS_TABLE: "LOCATIONS",
            JOBS_TABLE: "JOBS"
        },


        HEADER:{
            'Content-Type': 'application/json'
        },
        TEMPLATE:{

        },
        METHOD_POST: 'POST',
        METHOD_GET: 'GET'

    }

	return CONSTANTS;
});

