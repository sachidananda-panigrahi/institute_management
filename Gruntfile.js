module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*haml: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'index.html': 'index.haml'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'public/js/jquery-1.10.2.min.js',
                    'public/js/custom.js'
                ],
                dest: 'public/js/build/production.js',
                nonull: true
            }
        },*/
        // uglify: {
            // options: {
                // banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    // '<%= grunt.template.today("yyyy-mm-dd") %> */'
            // },
            // build: {
                // src: 'public/js/build/production.js',
                // dest: 'public/js/build/production.min.js'
            // }
        // },
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
            /*scripts: {
                files: ['public/js/*.js', 'public/js/libs/*.js'],
                tasks: ['concat', 'uglify']
            },*/
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
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-haml');

    // grunt.registerTask('default', ['concat','uglify','compass','cssmin', 'haml']);
    // grunt.registerTask('set', ['concat','uglify','compass','cssmin', 'haml','watch']);

    grunt.registerTask('default', ['compass','cssmin']);
    grunt.registerTask('set', ['compass','cssmin','watch']);
};