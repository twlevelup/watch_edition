const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  node:{
	  fs: 'empty',
  },
  cache: true,
  entry: {
    main: './client/src/main.js',
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
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
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
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.gif$/,
        loader: 'file-loader',
      }
    ],
  },
  watchOptions: {
    poll: true,
  },
  target: 'web',
  devServer: {
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './framework/templates/watch.hbs',
    }),
    new CopyWebpackPlugin([
      { from: 'client/src/sounds', to: 'sounds' },
      { from: '.circleci', to: '.circleci' },
    ]),
  ],
};
