var package = require('./package.json');
var path = require("path");

module.exports = function(grunt) {
	var mode = grunt.option("mode") || 'dev';
	global['live'] = grunt.option("live") || false;
	global['light'] = grunt.option("light") || false;
	
	if (global['light']) mode += '-light';
	if (global['live']) mode += '-live';
	
	grunt.log.ok('Run with '+mode+' dependencies.');

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
            config: require('./grunt/_modes.json'),
            scope: mode+'Dependencies'
        },
    });
}
