const path = require("path")
const webpack = require("webpack")
//reference to the html webpack plugin in node module
const HtmlWebPackPlugin = require('html-webpack-plugin')
//require statement for new plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//extra credit to test out a different plugin
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'development',
    //this will be the entry point attrubute for the webpack and this file will contain all of the exported JS and CSS
    entry: './src/Client/app.js',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
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
            }
        ]
    },
    plugins: [
        //instantiate the plugin
        new HtmlWebpackPlugin({
            //this will take a look at the index folder on the client side and make a new index file to put into the DIST wbepack folder
            template: './src/Client/views/index.html',
            filename: './index.html',
            //this allows for the html file to dynamically add the main.js to it at the bottom of the HTML 
        }),
        //clean plugin allows the updating of info to the dist file without have to delete first and then rerun the webpack
        new CleanWebpackPlugin({
            //if no options are pass the plugin will run default settings
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // new BundleAnalyzerPlugin({ 
            
        // })
        
    ]
}