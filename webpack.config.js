const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'index': './lib/index.tsx'
  },
  resolve: {
    extensions:['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'miro-react',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,   // svg 都用该 loader 解析
        loader: 'svg-sprite-loader',
      },
      // 解析 scss/sass 文件
      {
        test: /\.s([ac])ss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      }
    ]
  }
}