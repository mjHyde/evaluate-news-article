const path = require("path")
const webpack = require("webpack")
//reference to the html webpack plugin in node module
const HtmlWebPackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const WorkboxPlugin = require('workbox-webpack-plugin');


//some other files //////
//require statement for new plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//extra credit to test out a different plugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'production',
    entry: './src/Client/app.js',
    //added optimiazation code to help ...______...
    output: {
        libraryTarget: 'var',
        library: "Client"
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
            // this with translate the scss into css for the client side 
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader' ]
            },
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
        new MiniCssExtractPlugin({ filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW(),

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
        new BundleAnalyzerPlugin({ 
        })


        
    ]
}