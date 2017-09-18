# Steps to follow:


1. Project setup


`npm init`


`npm install --save-dev webpack`


2. Webpack configuration


`touch webpack.config.js`


Basic config is as follows and also create appropriate folder structure as per config defined below.


```
const path = require('path');

const config = {
    name: 'es6-transpiler',
    entry: './source/index.js',
    output: {
    	path: path.resolve(__dirname, "dest"),
        filename: '[name].js'
    }
};

module.exports = config;
```


You can run the following commands now to 


`./node_modules/webpack/bin/webpack.js`


3. Now its time to update webpack config to transpile ES2015/ES2k15/ES6 to browser understandable JS.


To do so, we need to understand about loaders in webpack. You can read about them from https://webpack.js.org/concepts/#loaders. 


We need the following installations first.


`npm install --save-dev babel-loader babel-core babel-preset-env`


And now we can update *webpack.config.js* as follows:


```
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
```


To bundle the source file now, which is a es6 code file, you can run the following commands.


To build code - 


`./node_modules/webpack/bin/webpack.js`


To bundle code or make it ready for production usage.


`./node_modules/webpack/bin/webpack.js -p`


Read about `babel-loader`, `babel-core` and `babel-preset-env` from github.
