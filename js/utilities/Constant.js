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
            DB_SIZE: 10 * 1024 * 1024
        },

        DB_TABLES: {
            USER_TABLE: "users",
            STUDENT_TABLE: "students",
            SUBJECT_TABLE: "subjects",
            SCORE_TABLE: "scores",
            NOTICE_TABLE: "notice",
            ATTENDANCE_TABLE: "attendance",
            EMPLOYEES_TABLE: "employees",
            EMPLOYEES_SALARY_TABLE: "salary",
            LOCATIONS_TABLE: "location"
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

