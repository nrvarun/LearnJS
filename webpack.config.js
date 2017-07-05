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
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.pug$/,
        loaders: ['file-loader?name=[path][name].html&context=./app/pug', 'pug-html-loader?pretty&exports=false']
      },
      // { 
      //   test: /\.css$/, 
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      // },
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
    contentBase: './app',
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true
    })
  ]
};
