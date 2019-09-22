const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');

//all configuration goes in here
module.exports = {
    entry: __dirname + '/src/index.js',
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
                test: /\.(png|jpe?g|gif)$/i,
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
        // contentBase: './app',
        // port: 9000,
        host: '0.0.0.0'
    },
    devtool: 'source-map', //will show code in development easier for debugging
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