const path = require('path')

const config = {
    name: 'es6-transpiler',
    entry: './source/index.js',
    output: {
    	path: path.resolve(__dirname, "dest"),
        filename: '[name].js'
    },
    module: {
    	rules: [
    		{
    			include: [
    				path.resolve(__dirname, "source")
		        ],
    			test: /\.js$/,
    			loader: "babel-loader",
    			options: {
    				presets: ["env"]
		        },
    		}
    	]
    }
}

module.exports = config;
