const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        }),
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
    new CopyWebpackPlugin([
      { from: 'client/src/sounds', to: 'sounds' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};
