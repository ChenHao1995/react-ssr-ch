const path = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config')

const serveConfig = {
  mode:'production',
  entry: './serve.js',
  output: {
      filename: 'serve.js',
      path: path.resolve(__dirname, '../serve-dist'),
      clean: true
  },
  plugins: [
    // new webpack.DefinePlugin({
    //  isSsr: true
    // })
  ],
  devtool: 'inline-source-map',
  target:'node'
};

const config = merge(baseConfig,serveConfig)
// console.log(config)
module.exports = config