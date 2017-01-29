'use strict';

let CopyWebpackPlugin = require('copy-webpack-plugin');
let ETP = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: [
    './js/main.js'
  ],
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loader: ETP.extract(
          'style',
          'css!postcss!sass')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  devServer: {
    contentBase: './',
    inline: true,
    port: 8000
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),

    new ETP('./css/style.css'),
    new HtmlWebpackPlugin({
      title: 'Webpack playground',
      minify: {
        html5: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true
      },
      cache: true,
      inject: true | 'head'
    }),
    new CopyWebpackPlugin([
            // {output}/file.txt
            {from: './index.html', to: './'}
    ])
  ]
};
