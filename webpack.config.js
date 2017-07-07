'use strict';

let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  entry: [
    './src/js/main.js'
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
        include: path.join(__dirname, 'src'),
        loaders: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src'),
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
    contentBase: './src',
    open: true,
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.pug',
      filename: 'about.html'
    })
  ]
};
