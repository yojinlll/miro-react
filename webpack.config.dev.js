const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    'index': './examples/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./examples/index.html"
    })
  ]
})