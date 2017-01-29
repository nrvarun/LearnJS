"use strict";
let debug = process.env.NODE_ENV !== 'production';
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: [
    './js/main.js'
  ],
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, './')
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass'
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
    port: 8000
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    new HtmlWebpackPlugin({
      title: 'Webpack playground',
      template: './index.html',
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        decodeEntities: true,
        collapseWhitespace: false,
        useShortDoctype: true
      }
    })
  ]
};
