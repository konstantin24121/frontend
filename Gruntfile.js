var package = require('./package.json');


module.exports = function(grunt) {
	var mode = grunt.option("mode") || 'dev';
	
	global['domain'] = package.domain;
    
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt,{
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: mode+'Dependencies'
        },
    });
}
