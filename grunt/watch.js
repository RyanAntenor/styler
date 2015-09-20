'use strict';

module.exports = {
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
    }
};