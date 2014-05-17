/*global module:false*/
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);


    // Project configuration.
    grunt.initConfig({
        markdown: {
            options: {
                template: 'md_template.html'
            },
            all: {
                files: [
                    {
                        expand: true,
                        src: ['*.md'],
                        dest: '.tmp/mdcompiled',
                        ext: '.html',
                    }
                ]
            }
        },
        watch: {
            md: {
                files: ['**/*.md', 'md_template.html'],
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
        clean: {
            md: ['.tmp/mdcompiled']
        }


    });


    grunt.registerTask('serve', function (target) {


        grunt.task.run([
            'clean:md',
            'markdown', // Initialize
            'connect:md',
            'watch:md'
        ]);

    });

};





