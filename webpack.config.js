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
    watch: true,
 	module: {
      loaders: [
         {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!sass'
         },
         {
             test: /\.html$/,
             exclude: /node_modules/,
             loader: 'html'
         }
      ]
   },
    devServer: {
        contentBase: './',
        inline: true,
        port: 8000
    },
    plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
