const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    //changing entry point from index.js to app.js. Can't figure out how to "import" data like varibale etc. seeing if app.js can be used as "main" file
    entry: './src/Client/app.js',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: "Client"
    },
    module: {
        rules: [
            {
                //this sets up all the things needed to grab all of the js files and tells it want not to include and where to send it to 
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        //instantiate the plugin
        new HtmlWebpackPlugin({
            //this will take a look at the index folder on the client side and make a new index file to put into the DIST webpack folder
            template: './src/Client/views/index.html',
            filename: './index.html',
            //this allows for the html file to dynamically add the main.js to it at the bottom of the HTML 
        }),
        // //this will clean the dist folder instead of having to delete it by hand
        // new CleanWebpackPlugin({
        //     // Simulate the removal of files
        //     dry: true,
        //     // Write Logs to Console
        //     verbose: true,
        //     // Automatically remove all unused webpack assets on rebuild
        //     cleanStaleWebpackAssets: true,
        //     protectWebpackAssets: false
        // }),
    ]
}
