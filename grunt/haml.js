module.exports = 
 {
	compile: {
		files: [{
			expand: true,
			cwd: 'sources/haml/',
			src: ['**/*.haml'],
			dest: 'views',
			ext: '.php'
		}]
	},
}