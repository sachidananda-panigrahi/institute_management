console.log('StudentController loaded...');
define(['js/utilities/Constant','js/model/StudentModel'], function(CONSTANT, STUDENTNMODEL){
	'use strict';


	function StudentController(){
		console.log('StudentController instantiated...');
        this.studentModel = new STUDENTNMODEL();
        this.addEventListeners();
	}

    StudentController.prototype.addEventListeners = function(){
        //console.log("addEventListeners");
        var formEvent = document.getElementById('studentForm');
        $(formEvent).bind('submit', {context:this},this.formSubmitHandler);
    }
    StudentController.prototype.formSubmitHandler = function(event){
        var that = event.data.context;
        that.eventData = $(event.currentTarget).serializeArray();
        //console.log(that.eventData);
        that.studentModel.submitLoginForm(that.eventData);
    }
	
	return StudentController;
});