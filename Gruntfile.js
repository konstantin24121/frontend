var package = require('./package.json');
var path = require("path");

module.exports = function(grunt) {
	var mode = grunt.option("mode") || 'dev';
	
	//Get path name
	path = process.cwd().split(path.sep);

	//Set global variables
	global['domain'] = package.project.domain;
	global['host']   = package.project.host;
	global['user']   = package.project.user;
	global['dest']   = '/www/' + global['domain'] + '/themes/'+ path[path.length - 1];
    
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt,{
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: mode+'Dependencies'
        },
    });
}
