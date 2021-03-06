module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
        dev:{
            options: {
                config: 'config.rb'
              } //options
          } //dev
      }, //compass
    watch: {
      options: {
        livereload: true },
        scripts: {
          files: ['_/components/js/*.js','_/components/js/foundation/*.js','_/components/js/vendor/*.js', ],
          tasks: ['uglify']
        }, //script
        sass: {
            files: ['sass/*.scss'],
            tasks: ['compass:dev']
        },
        html: {
          files: ['*.html']
        }
    } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports