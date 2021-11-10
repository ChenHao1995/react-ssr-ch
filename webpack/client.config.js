const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

const clientConfig = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].bundle.js',
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
  ],
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
    client: {
      overlay: false,
    },
  },
  optimization:{
    splitChunks:{
      minSize:0
    }
  },
}

const config = merge(baseConfig,clientConfig)
// console.log(config)
module.exports = config
  