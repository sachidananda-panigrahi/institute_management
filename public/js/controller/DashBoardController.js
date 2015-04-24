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
            this.sparklineChat();
            
    	}

        DashBoardController.prototype.user = function(){
            console.log('dashBoardController user Called...');
        }

        DashBoardController.prototype.sparklineChat = function(){
            console.log('dashBoardController sparklineChat Called...');
            $(function () {
                /**
                 * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
                 * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
                 */
                Highcharts.SparkLine = function (options, callback) {
                    var defaultOptions = {
                        chart: {
                            renderTo: (options.chart && options.chart.renderTo) || this,
                            backgroundColor: null,
                            borderWidth: 0,
                            type: 'area',
                            margin: [2, 0, 2, 0],
                            height: 40,
                            style: {
                                overflow: 'visible'
                            },
                            skipClone: true
                        },
                        title: {
                            text: ''
                        },
                        credits: {
                            enabled: false
                        },
                        exporting: { enabled: false },
                        xAxis: {
                            labels: {
                                enabled: false
                            },
                            title: {
                                text: null
                            },
                            startOnTick: false,
                            endOnTick: false,
                            tickPositions: []
                        },
                        yAxis: {
                            endOnTick: false,
                            startOnTick: false,
                            labels: {
                                enabled: false
                            },
                            title: {
                                text: null
                            },
                            tickPositions: [0]
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            backgroundColor: null,
                            borderWidth: 0,
                            shadow: false,
                            useHTML: true,
                            hideDelay: 0,
                            shared: true,
                            padding: 0,
                            positioner: function (w, h, point) {
                                return { x: point.plotX - w / 2, y: point.plotY - h};
                            }
                        },
                        plotOptions: {
                            series: {
                                animation: true,
                                lineWidth: 1,
                                shadow: false,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                marker: {
                                    radius: 1,
                                    states: {
                                        hover: {
                                            radius: 2
                                        }
                                    }
                                },
                                fillOpacity: 0.25
                            },
                            column: {
                                negativeColor: '#910000',
                                borderColor: 'silver'
                            }
                        }
                    };
                    options = Highcharts.merge(defaultOptions, options);

                    return new Highcharts.Chart(options, callback);
                };
                // console.log($(".sparkbar[data-sparkline]"));
                var start = +new Date(),
                    $tds = $(".sparkbar[data-sparkline]"),
                    fullLen = $tds.length,
                    n = 0;

                // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
                // can take some seconds, so we split the input into chunks and apply them in timeouts
                // in order avoid locking up the browser process and allow interaction.
                function doChunk() {
                    var time = +new Date(),
                        i,
                        len = $tds.length,
                        $td,
                        stringdata,
                        arr,
                        data,
                        chart;

                    for (i = 0; i < len; i += 1) {
                        $td = $($tds[i]);
                        stringdata = $td.data('sparkline');
                        arr = stringdata.split('; ');
                        data = $.map(arr[0].split(', '), parseFloat);
                        chart = {};

                        if (arr[1]) {
                            chart.type = arr[1];
                        }
                        $td.highcharts('SparkLine', {
                            series: [{
                                data: data,
                                pointStart: 1
                            }],
                            tooltip: {
                                // headerFormat: '<span style="font-size: 10px">' + $td.parent().find('.description-block').html() + ', Q{point.x}:</span><br/>',
                                pointFormat: '<b>{point.y}.00</b> USD'
                            },
                            chart: chart
                        });

                        n += 1;

                        // If the process takes too much time, run a timeout to allow interaction with the browser
                        if (new Date() - time > 500) {
                            $tds.splice(0, i + 1);
                            setTimeout(doChunk, 0);
                            break;
                        }

                        
                    }
                }
                doChunk();

            });
        }

       
	return DashBoardController;
});