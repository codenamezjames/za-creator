const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-decorators-legacy',
            "add-module-exports",
            "transform-es2015-modules-umd"
          ],
          presets: ['es2015', 'react']
        }
      },
      {test: /\.json$/, loader: 'json'},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}