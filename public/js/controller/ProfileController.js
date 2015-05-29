console.log('ProfileController loaded...');
define([
    'js/utilities/Constant',
    'socketIo',
    'LIB'], 
    function(CONSTANT,io,LIB){
	'use strict';
    	function ProfileController(){
    		console.log('ProfileController instantiated...');
            this.user();
            
    	}

        ProfileController.prototype.user = function(){
            console.log('ProfileController user Called...');
        }


	return ProfileController;
});