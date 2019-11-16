const path = require('path');

//all configuration goes in here
module.exports = {
    context: __dirname,
    entry:path.join( __dirname + "/../src/index.js"),
    devtool: 'inline-source-map', //will show code in development easier for debugging
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
        host: '0.0.0.0',
        contentBase: path.join(__dirname, '/../src') //where your content will be hosted from aka where index.html file is
    },
    output:{
        path: path.resolve(__dirname, "../src/webpackBuild"),
        publicPath: path.resolve(__dirname, "/webpackBuild"),
        filename: "resume.min.js",
    },
  
}