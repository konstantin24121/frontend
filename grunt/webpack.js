module.exports = 
{
	app:{
		context: "./sources/coffee/",
		entry: {
			app: "./app",
			home: "./layouts/home",
			map: "./layouts/map",
		},
		output: {
	        path: "./web/js",
	        publicPath: '/js/',
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
	    	modulesDirectories: ['node_modules'],
	    	modulesTemplates: ['*-loader'],
			extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
		},
		devtool: 'source-map',
		storeStatsTo: 'webpackStatsJson',
	}
}

