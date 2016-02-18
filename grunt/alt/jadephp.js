module.exports = 
 {
	compile: {
		files: [{
			expand: true,
			cwd: 'sources/jade/',
			src: ['**/*.jade'],
			dest: 'views',
			ext: '.php'
		}]
	},
}