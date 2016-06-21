'use strict';

module.exports = {
    dist: {
        options:{
        //require: 'susy',
            sourcemap: false,
            style: 'nested',  //nested, compact, compressed, expanded.
        },
        files: [
            {
                expand: true,
                cwd: 'app/scss',
                src: ['*.scss'],
                dest: 'app/css',
                ext: '.css'
            }
        ]
    }
};