/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['buildcss']
      },
      html: {
        files: ['*.html'],
        tasks: ['htmlhint']
      },
      others: {
        files: ['*.html', 'images/*', 'fonts/*']
      },
      options: {
        livereload: {
          port: 3000
        }
      }
    },

    htmlhint: {
      dev: {
        src: ['*.html']
      }
    },

    sass: {
      dev: {
        files: {
          'css/style.css': 'scss/style.scss'
        },
        options: {
          sourcemap: 'none'
        }
      }
    },

    csscomb: {
      dev: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    }

  });

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask('buildcss', ['sass', 'csscomb'])
  grunt.registerTask('default', []);

};
