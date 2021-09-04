const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [
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
      },
      {
        test: /\.svg/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
          options: {
            tag: 'symbol',
            attrs: {
              title: 'example',
            },
            name: 'MyIcon',
          },
        },
      },
    ]
  },
  resolve:{
    alias:{
      '@src': path.resolve('src')
    }
  }
}
  