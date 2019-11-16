const path = require('path');
const version = require("../package.json").version;
const webpack = require('webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


//all configuration goes in here
module.exports = {
    context: __dirname,
    mode: 'production', //change this to production when wanting to minify file
    entry:path.join( __dirname + "/../src/index.js"),
    optimization:{
      splitChunks:{
        cacheGroups: {//tells splitchunksplugin to create chunks based on conditions
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {//will chunk all npm into one vendor chunk
            filename: 'vendor-' + version + ".min.js",
            chunks: 'all',
            test: /node_modules/
          }    
        }
      }
    },
    module: {
        rules:[
            {      
              test: /\.(js|jsx)$/,      
              exclude: /node_modules/,      
              use: ['babel-loader', 'eslint-loader'] // include eslint-loader    
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
    output:{
        path: path.resolve(__dirname, "../webpackBuildProd"),
        publicPath: path.resolve(__dirname, "/webpackBuild"),
        filename: "resume.min.js",
    },
    plugins:[
        new webpack.DefinePlugin({ // <-- key to reducing React's size
          'process.env': {
            'NODE_ENV': JSON.stringify('production'),
            "__VERSION__": JSON.stringify(require("../package.json").version)
          }
        }),
        // new HtmlWebpackPlugin(),
        // new DynamicCdnWebpackPlugin(),
        // new webpack.optimize.AggressiveMergingPlugin(),
        new BundleAnalyzerPlugin(), //ui for analyzing produciton build
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new MiniCssExtractPlugin({
        //   // filename: "[name]." + version + "-min.css",
          
        //   chunkFilename: "[id].css",
        //   allChunks: true
        // })
      
      ]
}