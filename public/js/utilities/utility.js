// JavaScript source code for tab
$(document).ready(function () {
  
    $('.recommendations-new').click(function () {
        
        $('#recommendations').show();
        $('.push-notification-one').hide();
        $('#gallery').hide();
        $('#hair').hide();
        $('#wrapper').hide();
        $('#skin-nails').hide();
        $('#for-men').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#help').hide();
      
    });
    $('.interesting-read').click(function () {
        $('.recommendations').removeClass('selected-btn');
        $('.recommendations').removeClass('unselected-btn');
        $('.interesting-read').removeClass('unselected-btn');
        $('.interesting-read').addClass('selected-btn');
        $('.push-notification-one').show();
        $('#recommendations').hide();
        $('#slider-2').hide();
    });
    // JavaScript source code for gallery
    $('.next').click(function () {
        $('#slider-1').fadeIn('show');
        $('#slider-2').hide();
		$('#slider-3').hide();
    });
    $('.prev').click(function () {
        //$('#slider-2').animate({ width: "toggle" }, 500);
        $('#slider-2').fadeIn('show');
        $('#slider-1').hide();
		$('#slider-3').hide();
    });
	/* $('.prev').click(function () {
        //$('#slider-2').animate({ width: "toggle" }, 500);
        $('#slider-3').fadeIn('show');
        $('#slider-1').hide();
		$('#slider-2').hide();
    }); */
    $('.hair').click(function () {
        $('#hair').show();
        $('#wrapper').hide();

    });
    $('.skin-nails').click(function () {
        $('#skin-nails').show();
        $('#hair').hide();
        $('#wrapper').hide();
        $('#recommendations').hide();

    });
    $('.home-screen').click(function () {
        $('#hair').hide();
        $('#wrapper').show();
        $('#skin-nails').hide();
        $('#for-men').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
        $('#slider-1').show();
    });
    $('.als-item').click(function () {
        $('#gallery').show();
        $('#hair').hide();
        $('#wrapper').hide();
        $('#skin-nails').hide();
        $('#for-men').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.for-men').click(function () {
        $('#for-men').show();
        $('#wrapper').hide();
        $('#skin-nails').hide();
        $('#hair').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.spa').click(function () {
        $('#spa').show();
        $('#for-men').hide();
        $('#wrapper').hide();
        $('#skin-nails').hide();
        $('#hair').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.make-up').click(function () {
        $('#make-up').show();
        $('#for-men').hide();
        $('#wrapper').hide();
        $('#skin-nails').hide();
        $('#hair').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.btn-1').click(function () {
        $('#hair').show();
        $('#for-men').hide();
        $('#skin-nails').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.btn-2').click(function () {
        $('#skin-nails').show();
        $('#hair').hide();
        $('#for-men').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.btn-3').click(function () {
        $('#for-men').show();
        $('#hair').hide();
        $('#skin-nails').hide();
        $('#make-up').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.btn-4').click(function () {
        $('#make-up').show();
        $('#for-men').hide();
        $('#hair').hide();
        $('#skin-nails').hide();
        $('#spa').hide();
        $('#gallery').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.btn-5').click(function () {
        $('#recommendations').hide();
        $('#spa').show();
        $('#make-up').hide();
        $('#for-men').hide();
        $('#hair').hide();
        $('#skin-nails').hide();
        $('#gallery').hide();
        $('#help').hide();
    });
    $('.btn-6').click(function () {
        $('#gallery').show();
        $('#spa').hide();
        $('#make-up').hide();
        $('#for-men').hide();
        $('#hair').hide();
        $('#skin-nails').hide();
        $('#help').hide();
        $('#recommendations').hide();
    });
    $('.inner-page .rhs .link-panel ul li').click(function () {
        $('.overlay').show();
        $('.popup').show();
        $('.close-btn').show();
    });
    $('.close-btn').click(function () {
	    $('.popup-container').text("");
        $('.overlay').hide();
        $('.popup').hide();
        $('.close-btn').hide();
    });
    /* $('.inner-page .rhs .image-gallery-right ul li').click(function () {
        $('.image-gallery-left-1').show();
        $('.image-gallery-left').hide();
    }); */
    $('.wrapper header .icons .help-icon').click(function () {
        $('#help').show();
        $('#gallery').hide();
        $('#spa').hide();
        $('#make-up').hide();
        $('#for-men').hide();
        $('#hair').hide();
        $('#skin-nails').hide();
        $('#recommendations').hide();
        $('#wrapper').hide();
    });
    $('#accordion').find('.accordion-toggle').click(function () {

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
       
       
        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');

    });
    
    $("#lista1").als({
        visible_items: 4,
        scrolling_items: 2,
        orientation: "horizontal",
        circular: "yes",
        autoscroll: "no",
        interval: 5000,
        speed: 500,
        easing: "linear",
        direction: "right",
        start_from: 0
    });

    $('.image-gallery-right ul li').click(function(e){
      e.preventDefault();
      //get left image panel
      var left_panel_img = $('.image-gallery-left img');
      //initialize left zoom panel with image src
     // $(left_panel_img).attr('src','images/final-1p.jpg');
      //get right side thumbnail image src
      $(left_panel_img).attr('src',photo_fullsize);
      
      var photo_fullsize =  $(this).find('img').attr('src');
      //apply clicked thumbnail into left image panel
      $(left_panel_img).attr('src',photo_fullsize);

    });
    //Do Service Call
/*
    $.ajax({
       type: 'GET',
        url: CONSTANTS.API.IMAGE_GALERY,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
           console.dir(json.sites);
        },
        error: function(e) {
           console.log(e.message);
        }
    });*/
    var serviceManagerObject = new ServiceManager();
    var serviceObj = {};
    serviceObj.url = CONSTANTS.API.IMAGE_GALERY;
    serviceObj.headers = CONSTANTS.HEADER;
    serviceObj.type = CONSTANTS.METHOD_POST;
    serviceObj.data = {clientId:"1", programId:"1"};
    // serviceObj.data = {};

    serviceManagerObject.doServiceCall(serviceObj).done(function(serviceData){
        console.log("serviceData");
        console.log(serviceData);
    }).fail(function (error) {
        console.log(error);
    });
    
});

    function ServiceManager(){
        console.log('ServiceManager Loaded...');
        this.url = null;
        this.data = null;
        this.type = null;
        this.header = null;
    };



//Setter
    ServiceManager.prototype.setURL = function(surl){
        if(surl){
            this.url= surl;
        }
    }
    ServiceManager.prototype.setData = function(sdata){
        if(sdata){
            this.data = JSON.stringify(sdata);
        }
    }
    ServiceManager.prototype.setType = function(stype){
        if(stype){
            this.type = stype;
        }
    }
    ServiceManager.prototype.setHeader = function(sheader){
        if(sheader){
            this.header = sheader;
        }
        else{
            this.header = CONSTANTS.HEADER;
        }
    }

//Getter
    ServiceManager.prototype.getURL = function(){
        return this.url;
    };
    ServiceManager.prototype.getData = function(){
        return this.data;
    };
    ServiceManager.prototype.getType = function(){
        return this.type;
    };
    ServiceManager.prototype.getHeader = function(){
        return this.header;
    };

//
    ServiceManager.prototype.doServiceCall = function(serviceObj){

        var $deferred = new $.Deferred();
        this.setHeader(serviceObj.header);
        this.setURL(serviceObj.url);
        this.setType(serviceObj.type);
        this.setData(serviceObj.data);

        $.ajax(this.getURL(), {
            // type: this.getType(),
            // headers: this.getHeader(),
            data: this.getData(),
            async: false,
            // jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success:function(serverData){
                $deferred.resolve(serverData);
            },
            error:function(error){
                $deferred.reject(error);
            }

        });
        return $deferred.promise();
    };


/*$(document).ready(function () {
    $("#lista1").als({
        visible_items: 4,
        scrolling_items: 2,
        orientation: "horizontal",
        circular: "yes",
        autoscroll: "no",
        interval: 5000,
        speed: 500,
        easing: "linear",
        direction: "right",
        start_from: 0
    });
});*/
 //Code For Inner Galler Image Zoomify
 /*$(document).ready(function(){
  $('.image-gallery-right ul li').click(function(e){
  e.preventDefault();
  //get left image panel
  var left_panel_img = $('.image-gallery-left img');
  //initialize left zoom panel with image src
 // $(left_panel_img).attr('src','images/final-1p.jpg');
  //get right side thumbnail image src
  $(left_panel_img).attr('src',photo_fullsize);
  
  var photo_fullsize =  $(this).find('img').attr('src');
  //apply clicked thumbnail into left image panel
  $(left_panel_img).attr('src',photo_fullsize);

});
 });
*/
