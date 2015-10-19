var path = require('path'),
  webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './client/src/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'public/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader'
      }

    ]
  },
  // resolve: {
  //   alias: {
  //     // Bind version of jquery
  //     jquery: 'jquery-2.0.3'
  //   }
  // },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
};
