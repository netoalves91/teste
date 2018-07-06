'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
      rules: [{
          test: /\.sass$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
      }]
  }
}