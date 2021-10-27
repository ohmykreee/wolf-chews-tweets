module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'wolf-chews.js',
                dest: 'wolf-chews.min.js'
            }
        },
        cssmin: {
            build: {
                src: 'wolf-chews.css',
                dest: 'wolf-chews.min.css',
            }
        }
    });
  
    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('build', ['uglify', 'cssmin']);
  
  };