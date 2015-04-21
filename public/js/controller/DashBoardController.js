console.log('dashBoardController loaded...');
define(['js/utilities/Constant',
    'js/build/production.min.js'], 
    function(CONSTANT){
	'use strict';
    	function DashBoardController(){
    		console.log('dashBoardController instantiated...');
            this.user();
    	}

        DashBoardController.prototype.user = function(){
            console.log('dashBoardController user Called...');
        }

	return DashBoardController;
});