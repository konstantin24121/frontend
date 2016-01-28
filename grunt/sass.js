module.exports = 
 {
	app: {
		files: [{
			expand: true,
			cwd: 'sources/sass/views/',
			src: ['*.sass'],
			dest: 'web/css/',
			ext: '.css'
		}]
	},
	options: {
		sourceMap: true, 
		outputStyle: 'nested',
	}
}