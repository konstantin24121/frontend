module.exports = function(grunt) {
	var mode = grunt.option("mode") || 'dev';
    require('time-grunt')(grunt);    
    require('load-grunt-config')(grunt,{
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: mode+'Dependencies'
        },
    });
}
