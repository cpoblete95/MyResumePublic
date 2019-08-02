const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');

//all configuration goes in here
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_moudles/,
                loader: 'babel-loader'
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, "./webpackBuild"),
        publicPath: path.resolve(__dirname, "/webpackBuild"),
        filename: "resume.min.js",
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         template: __dirname + '/src/index.html',
    //         filename: 'index.html',
    //         inject: 'body'
    //     })
    // ]
}