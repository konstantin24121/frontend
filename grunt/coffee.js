module.exports = 
{
    compile:{
    	files:[{
    		expand: true,
			cwd: 'sources/coffee/views',
			src: ['*.coffee'],
			dest: 'web/js/',
			ext: '.js'
    	}],
	    options: {
	      sourceMap: true
	    },
	 }
}