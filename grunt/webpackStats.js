var fs = require("fs");

module.exports = function (grunt) {

	grunt.task.registerTask('webpackStats', 'foo', function() {
		grunt.file.mkdir('.temp');
	    fs.writeFileSync('.temp/webpackStats.json', JSON.stringify(grunt.config.getRaw('webpackStatsJson')));
	});
}