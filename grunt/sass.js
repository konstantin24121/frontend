module.exports = 
 {
	app: {
		files: [{
			expand: true,
			cwd: 'sources/sass/views/',
			src: ['*.scss'],
			dest: 'web/css/',
			ext: '.css'
		}]
	},
	options: {
		sourceMap: true, 
		outputStyle: 'nested',
	}
}