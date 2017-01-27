var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './js/main.js'
    ],
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, './')
    },
 	module: {
      loaders: [
         {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!sass'
         }
      ]
   },
    devServer: {
        contentBase: './',
        inline: true,
        port: 8000
    }
};
