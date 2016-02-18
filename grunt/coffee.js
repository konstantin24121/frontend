module.exports = 
{
    compile:{
    	files:[{
    		expand: true,
			cwd: 'sources/coffee/',
			src: ['**/*.coffee'],
			dest: '.temp/js/',
			ext: '.js'
    	}],
	    options: {
	      sourceMap: true
	    },
	 }
}