const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './client/src/js/main.js',
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader',
          'istanbul-instrumenter-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-template-loader',
      },
      {
        test: /\.ttf/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'web',
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
    })
  ],
};
