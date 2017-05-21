const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "./dest/bundled.css",
    disable: process.env.NODE_ENV === "development"
});

const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    name: 'css',
    entry: './source/init.scss',
    output: {
        filename: './dest/[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                		{loader: "css-loader"},
                		{loader: "sass-loader"}
                	],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(paths=["./dest/"]),
        extractSass
    ]
};

module.exports = config;
