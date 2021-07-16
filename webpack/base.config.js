const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath: '/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'react-ssr',
          template: path.resolve(__dirname, './index.html')
        }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })          
    ],
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                   
                  }
                }
              }
        ]
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
              { from: /^\//, to: '/dist/index.html' },
            ],
        },
        compress: true,
        // contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
    },
};
  