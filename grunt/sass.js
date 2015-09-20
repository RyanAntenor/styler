'use strict';

module.exports = {
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
};