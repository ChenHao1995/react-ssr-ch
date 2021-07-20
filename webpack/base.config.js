const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        }),
        new MiniCssExtractPlugin() 
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
            },
            {
                test: /\.s[ac]ss$/i,
                // use: [
                //   // 将 JS 字符串生成为 style 节点
                //   'style-loader',
                //   // 将 CSS 转化成 CommonJS 模块
                //   'css-loader',
                //   // 将 Sass 编译成 CSS
                //   'sass-loader',
                // ],
                use: [
                  MiniCssExtractPlugin.loader,
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                ],
              },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
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
  