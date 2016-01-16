'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      sqlite: {
        src: "chinookdatabase/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite",
        dest: "sqlite/db/Chinook_Sqlite.sqlite"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy:sqlite']);
}