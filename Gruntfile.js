module.exports = function(grunt) {

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            build: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    outputStyle: 'compressed'
                }
            }
        },

        // Clean
        clean: {
            pre: ['styleguide', 'assets/css'],
            post: ['.sass-cache']
        },

        // Watch
        watch: {
            sass: {
                files: ['assets/sass/**/*.{sass,scss}'],
                tasks: ['compass', 'sassdown']
            }
        },

        // Sassdown (Styleguide)
        sassdown: {
            options: {
                assets: ['assets/css/*.css']
            },
            files: {
                expand: true,
                cwd: 'assets/sass/partials',
                src: ['**/*.{sass,scss}'],
                dest: 'styleguide/'
            }
        }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Register Grunt tasks
    grunt.registerTask('default', ['clean:pre', 'compass', 'sassdown', 'clean:post']);
  
};
