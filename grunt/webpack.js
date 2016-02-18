module.exports = 
{
	app:{
		entry: "./.temp/js/app",
		output: {
	        path: "web/js",
	        filename: "app.js",
	    },
	    module: {
	    	loaders: [
		    	// {
		    	// 	test: /\.js$/,
		    	// 	loader: 'babel?presets[]=es2015'
		    	// }
	    	]
	    }
	}
	
}

