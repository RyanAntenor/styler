'use strict';

module.exports = {
    options:{
        livereload: true,
    },
    html:{
        files:['./app/*.html'],
    },
    sass:{
        files:['./scss/*.scss'],
        tasks: ['sass'],
        options: {livereload:true},
    },
    js:{
        files:['app/js/*.js'],
    },
    bower:{
        files:['bower.json'],
        tasks: 'wiredep',
    },
    jade:{
        files:['./jade/**/*.jade'],
        tasks:['jade','wiredep'],
    }
};