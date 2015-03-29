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

