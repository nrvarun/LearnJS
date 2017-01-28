var debug = process.env.NODE_ENV !== 'production';

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
    eslint: {
        configFile: './.eslintrc'
    },
    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,
         devel: false,
        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,
        esversion:  6,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        // custom reporter function
        reporter: function(errors) { }
    },
 	module: {
         preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'

            },
            {   
                test: /\.es6$/, 
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
                test: /\.es6$/,
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
    plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
