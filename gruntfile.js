'use strict';

module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.registerTask('inputHandler', function() {
    grunt.task.run(grunt.config('selectedTask'));
  });

};
