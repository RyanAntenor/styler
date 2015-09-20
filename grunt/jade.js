'use strict';

module.exports = {
    compile: {
        options: {
            pretty: true,
            data: {debug: false}
        }
    },

    files:[{
        cwd: "./jade",
        src:["*.jade"],
        // dest: "templates",
        // expand: true,
        // ext: ".html"
    }],
};