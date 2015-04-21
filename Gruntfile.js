module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*haml: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'index.html': 'index.haml'
                }
            }
        },*/
        concat: {
            dist: {
                src: [
                    'public/js/lib/jquery-ui-1.10.3.min.js',
                    'public/js/lib/bootstrap.min.js',
                    'public/js/lib/raphael-min.js',
                    'public/js/lib/plugins/morris/morris.min.js',
                    'public/js/lib/plugins/sparkline/jquery.sparkline.min.js',
                    'public/js/lib/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'public/js/lib/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
                    'public/js/lib/plugins/jqueryKnob/jquery.knob.js',
                    'public/js/lib/plugins/daterangepicker/daterangepicker.js',
                    'public/js/lib/bootstrap-datepicker.js',
                    'public/js/lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
                    'public/js/lib/plugins/iCheck/icheck.min.js',
                    'public/js/lib/jquery.slimscroll.min.js',
                    'public/js/lib/plugins/fullcalendar/fullcalendar.min.js',
                    'public/js/lib/respond.min.js',
                    'public/js/lib/AdminLTE/app.js',
                    'public/js/lib/AdminLTE/dashboard.js',
                    'public/js/lib/jquery.validate.min'
                ],
                dest: 'public/js/build/production.js',
                nonull: true
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'public/js/build/production.js',
                dest: 'public/js/build/production.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'public/css'
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'public/css_min/production.min.css': [
                        'public/css/bootstrap.min.css',
                        'public/css/font-awesome.css',
                        'public/css/ionicons.min.css',
                        'public/css/morris/morris.css',
                        'public/css/jvectormap/jquery-jvectormap-1.2.2.css',
                        'public/css/fullcalendar/fullcalendar.css',
                        'public/css/daterangepicker/daterangepicker-bs3.css',
                        'public/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
                        'public/css/AdminLTE.css',
                        'public/css/style.css'
                    ]
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['notify:gruntChange']
            },
            scripts: {
                files: ['public/js/lib/*.js'],
                tasks: ['concat', 'uglify']
            },
            csstosass: {
                files: ['public/sass/*.sass'],
                tasks: ['compass']
            },
            css: {
                // files: ['public/css/*.css','public/css/!*.min.css'],
                files: ['public/css/*.css'],
                tasks: ['cssmin']
            },
            /*haml: {
                files: ['*.haml'],
                tasks: ['haml']
            }*/
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-haml');

    // grunt.registerTask('default', ['concat','uglify','compass','cssmin', 'haml']);
    // grunt.registerTask('set', ['concat','uglify','compass','cssmin', 'haml','watch']);

    grunt.registerTask('default', ['concat','uglify','compass','cssmin']);
    grunt.registerTask('set', ['concat','uglify','compass','cssmin','watch']);
};