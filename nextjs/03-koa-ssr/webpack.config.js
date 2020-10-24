var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{ test: /\.jsx?$/, loaders: ['babel-loader'] }],
  },
}
