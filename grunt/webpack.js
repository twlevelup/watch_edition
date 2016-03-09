'use strict';

var webpack = require('webpack'),
  webpackConfig = require('./../webpack.config.js');

module.exports = {
  options: webpackConfig,
  build: {
    plugins: webpackConfig.plugins.concat(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    )
  },
  'build-dev': {
    devtool: 'sourcemap',
    debug: true
  }
};
