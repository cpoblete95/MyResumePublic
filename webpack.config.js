const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');

//all configuration goes in here
module.exports = {
    context: __dirname,
    entry:path.resolve( __dirname + "/src/index.js"),
    module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
              test: /bootstrap.min.css$/,
              loader: 'css-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                exclude: /bootstrap.min.css$/,
                options: {
                    modules: true,
                    modules:{
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: '/images/'
                    }
                  },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: '/fonts/'
                    }
                  }
                ]
              }
        ]
    },
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    devtool: 'source-map', //will show code in development easier for debugging
    output:{
        path: path.resolve(__dirname, "./src/webpackBuild"),
        publicPath: path.resolve(__dirname, "/webpackBuild"),
        filename: "resume.min.js",
    }
}