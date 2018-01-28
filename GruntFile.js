module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ["watch:jshint", "watch:uglify:target"]
            },

        },

        watch: {
            jshint:{
                files:['script/*.js'],
                task: ['jshint','uglify:target']
            },
            less: {
                files: ['style/style.less', 'style2/style2.less'], // ** any directory; * any file
                tasks: ['less','cssmin']
            },
            cssmin: {
                files: '**/*.css',
                tasks: ['cssmin']
            },
            concat: {
                files: ['scripts/hello.js', 'scripts/main.js'],
                tasks: ['concat']
            },
            uglify: {
                files: 'script/*.js',
                tasks: ['uglify']
            }
        },

        less: {
            development: {
                options: {
                    paths: ['style/css']
                },
                files: {
                    'css/result.css': 'style/style.less',
                    'css/result2.css': 'style2/style2.less',
                }
            },
        },

        cssmin: {
            my_target: {
                files: {
                    'css/result.min.css': [
                        'css/result.css',
                        'css/result2.css'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'script/app.min.js': [
                        'script/angular.min.js',
                        'script/angular-route.js',
                        'script/angular-animate.min.js',
                        'script/axios.min.js',
                        'script/app.js',
                        
                    ]
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'script/*.js']
        }

    });
    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
    grunt.registerTask("dev", ["concurrent:dev"]);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-concurrent');
};