const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
