const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "./public/bundled.css",
    disable: process.env.NODE_ENV === "development"
});

const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    name: 'css',
    entry: './stylesheets/init.scss',
    output: {
        filename: './public/[name].js'
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
        new CleanWebpackPlugin(paths=["./public/"]),
        extractSass
    ]
};

module.exports = config;
