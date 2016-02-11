module.exports = 
 {
	compile: {
		options: {
			enableDynamicAttributes: false,
		},
		files: [{
			expand: true,
			cwd: 'sources/haml/',
			src: ['**/*.haml'],
			dest: 'views',
			ext: '.php'
		}]
	},
}