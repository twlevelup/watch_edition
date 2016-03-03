'use strict';

var path = require('path'),
  webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './client/src/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'public/js/'),
    publicPath: 'js/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: path.resolve('client/src/js/'),
      loader: 'istanbul-instrumenter'
    }],
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass', 'sass?sourceMap']
    }, {
      test: /\.hbs/,
      loader: 'handlebars-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // FIXME this is lazy, do something better with backbone and underscore
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery',
      Backbone: 'backbone',
      _: 'underscore'
    })
  ]
};
