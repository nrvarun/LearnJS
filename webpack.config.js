'use strict';

let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  entry: [
    './app/js/main.js'
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
        test: /\.pug$/,
        include: path.join(__dirname, 'app'),
        loaders: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'app'),
        loaders: ['html-loader']
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
    contentBase: './app'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './app/about.pug',
      filename: 'about.html'
    })
  ]
};
