const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode:'production',
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module:{
    rules:[
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
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
      '@src': path.resolve('src')
    },
    extensions: ['.ts', '.tsx', '.js'],
    // plugins: [new TsconfigPathsPlugin({ configFile:path.resolve(__dirname,'../tsconfig.json')})]
  },
  stats:{}
}
  