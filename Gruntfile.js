module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //Server info
        connect: {
            html: {
                options: {
                    port: 9000,
                    base: '.',
                    livereload: true,
                    hostname:'localhost',
                    // hostname:'0.0.0.0' // network availability
                }
            }
        },
        //Wiredep

        wiredep: {
            target: {
                src:'./templates/*.html',
                }
        },
        //Jade file
        jade: {
          compile: {
            options: {
                 pretty: true,
              data: {
                debug: false,
               
              }
            },
            files:[{
                cwd: "./jade",
                src:["*.jade"],
                dest: "./templates",
                expand: true,
                ext: ".html"
            }],
          }
        },
        //Sass
        sass: {
            dist: {
                options:{
                    //require: 'susy',
                    sourcemap: true,
                    style: 'compact',  //nested, compact, compressed, expanded.
                },
                files:[{
                    cwd:'./scss',
                    src:'*.scss',
                    dest:'./css',
                    expand: true,
                    ext: '.css'
                }]
            }
        },
        //Watch file
        watch:{
            options:{
                    livereload: true,
                },
            html:{
                files:['./templates/*.html'],
            },
            sass:{
                files:['./scss/*.scss'],
                tasks: ['sass'],
                options: {livereload:true},
            },
            js:{
                files:['./js/*.js'],
            },
            bower:{
                files:['bower.json'],
                tasks: 'wiredep',
            },
            jade:{
                files:['./jade/**/*.jade'],
                tasks:['jade','wiredep'],
            },
            // coffee:{
            //  files:['./**/*.coffee'],
            //  tasks:'coffee'
            // },
        }

    

    });

    grunt.registerTask('default', ['connect','watch']);

}