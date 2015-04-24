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
                    'public/js/lib/jquery.min.js',
                    'public/js/lib/highcharts-custom.js',
                    'public/js/lib/bootstrap.min.js',
                    'public/plugins/fastclick/fastclick.min.js',
                    'public/js/lib/app.min.js',
                    'public/plugins/sparkline/jquery.sparkline.min.js',
                    'public/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'public/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
                    'public/plugins/daterangepicker/daterangepicker.js',
                    'public/plugins/datepicker/bootstrap-datepicker.js',
                    'public/plugins/iCheck/icheck.min.js',
                    'public/plugins/slimScroll/jquery.slimscroll.min.js',
                    'public/plugins/chartjs/Chart.min.js',
                    'public/js/lib/pages/dashboard2.js',
                    'public/js/lib/demo.js',
                    'public/js/lib/jquery.validate.min.js'
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
                        'public/css/bootstrap.css',
                        'public/css/font-awesome.css',
                        'public/css/ionicons.css',
                        'public/plugins/morris/morris.css',
                        'public/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
                        'public/plugins/daterangepicker/daterangepicker-bs3.css',
                        'public/css/AdminLTE.css',
                        'public/css/skins/_all-skins.css',
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
                files: ['public/js/lib/*.js','public/js/lib/AdminLTE/*.js','public/js/lib/plugins/*.js'],
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