'use strict';

module.exports = {
    compile: {
        options: {
            pretty: true,
            data: {debug: false}
        },

        files:[{
            cwd: "jade",
            src:["*.jade"],
            dest: "app",
            expand: true,
            ext: ".html"
        }]
    },

};