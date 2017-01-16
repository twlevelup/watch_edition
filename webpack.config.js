const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: ['babel-polyfill', './client/src/js/main.js'],
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'sass?sourceMap'],
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-template-loader',
      },
      {
        test: /\.ttf/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.png$/,
        loader: 'file',
      },
    ],
    postLoaders: [
      { test: /\.js$/, loader: 'istanbul-instrumenter', include: path.join(__dirname, 'client/src/js') },
    ],
  },
  watchOptions: {
    poll: true,
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
      _: 'underscore',
    }),
    new HtmlWebpackPlugin({
      template: './client/src/index.ejs',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
