module.exports = function (grunt) {
  var script_files = [
    "simditor/lib/simditor.js",
    "editor/build/editor.js",
    "bower_components/to-markdown/dist/to-markdown.js",
    "bower_components/marked/marked.min.js",
    "src/xeditor.js"
  ];

  var style_files = [
    "simditor/styles/simditor.css",
    "editor/build/editor.css",
    "src/xeditor.css"
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      scripts: {
        src: script_files,
        dest: 'dist/xeditor.js'
      },
      styles: {
        src: style_files,
        dest: 'dist/xeditor.css'
      }
    },

    watch: {
      scripts: {
        files: script_files,
        tasks: ['concat:scripts']
      },
      styles: {
        files: style_files,
        tasks: ['concat:styles']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'watch']);
};