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
            LOGIN: '/api/userlist',
            ADDUSER: '/api/addUser',
            STUDENTFORM: '/student_Sign_up'
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

