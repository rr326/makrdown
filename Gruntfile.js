/*global module:false*/
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);


  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: ['*.md'],
                        dest: '.tmp/mdcompiled',
                        ext: '.html'
                    }
                ]
            }
        },    
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      },

      md: {
        files: ['*.md'],
        tasks: ['markdown'],
        options: {
          spawn: false,
          livereload: 35731
        }
      }
    },

        // The actual grunt server settings
        connect: {
          options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
          },

          md: {
            options: {
              open: true,
              base: ['.tmp/mdcompiled'],
              port: 9002,
              livereload: 35731
            }
          }
        },


      });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', function (target) {


    grunt.task.run([
                'markdown', // Initialize
                'connect:md',
                'watch:md'
                ]);

  });

};





