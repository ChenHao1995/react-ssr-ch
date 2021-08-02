const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'production',
    entry: './serve.js',
    output: {
        filename: 'serve.js',
        path: path.resolve(__dirname, '../serve-dist'),
        clean: true
    },
    plugins: [
      new MiniCssExtractPlugin() ,
      // new webpack.DefinePlugin({
      //  isSsr: true
      // })
    ],
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    configFile:path.resolve(__dirname,'../babel.config.js')
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
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 819200,
                  }
                },
              ]
            }
        ]
    },
    resolve:{
      alias:{
        "@src": path.resolve('src')
      }
    },
    target:'node'
};
  