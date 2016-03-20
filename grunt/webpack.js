module.exports = 
{
	app:{
		context: "./sources/coffee/",
		entry: {
			app: "./app",
		},
		output: {
	        path: "./web/js",
	        filename: "[name].js",
	        library: "[name]"
	    },
	    module: {
	    	loaders: [
		    	{ test: /\.coffee$/, loader: "coffee" },
		    	{ test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
	    	]
	    },
	    resolve: {
			extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
		}
	}
	
}

