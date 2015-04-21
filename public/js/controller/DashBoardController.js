console.log('dashBoardController loaded...');
define(['js/utilities/Constant',
    'js/lib/jquery.validate.min',
    'js/lib/jquery-ui-1.10.3.min.js',
    'js/lib/bootstrap.min.js',
    'js/lib/raphael-min.js',
    'js/lib/plugins/morris/morris.min.js',
    'js/lib/plugins/sparkline/jquery.sparkline.min.js',
    'js/lib/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'js/lib/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'js/lib/plugins/fullcalendar/fullcalendar.min.js',
    'js/lib/plugins/jqueryKnob/jquery.knob.js',
    'js/lib/plugins/daterangepicker/daterangepicker.js',
    'js/lib/plugins/iCheck/icheck.min.js',
    'js/lib/AdminLTE/dashboard.js'], function(CONSTANT, 
        validate, 
        jQueryUI, 
        bootstrap, 
        raphael, 
        moris, 
        sparkline, 
        jvectormap, 
        jvectormap_world, 
        fullcalendar,
        knob,
        daterangepicker,
        iCheck,
        dashboard){
	'use strict';

	function DashBoardController(){
		console.log('dashBoardController instantiated...');
	}


	return DashBoardController;
});