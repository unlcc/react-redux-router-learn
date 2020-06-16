const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, '../dist/index.html')
    })
  ]
}