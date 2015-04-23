console.log('dashBoardController loaded...');
define([
    'js/utilities/Constant',
    /*'js/lib/bootstrap.min.js',
    'plugins/fastclick/fastclick.min.js',
    'js/lib/app.js',
    'plugins/sparkline/jquery.sparkline.min.js',
    'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'plugins/daterangepicker/daterangepicker.js',
    'plugins/datepicker/bootstrap-datepicker.js',
    'plugins/iCheck/icheck.min.js',
    'plugins/slimScroll/jquery.slimscroll.min.js',
    'plugins/chartjs/Chart.min.js',
    'js/lib/pages/dashboard2.js',
    'js/lib/demo.js',*/
    'LIB'
    /*'js/lib/jquery.validate.min.js'*/], 
    function(CONSTANT,LIB){
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