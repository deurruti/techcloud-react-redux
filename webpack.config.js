var path = require('path');
var webpack = require('webpack');

//entry is telling webpack where to build the dependency tree from 
//output says to output a bundle.js file in /dist/bundle.js
// contentBase is where our index.html exists in this case its in dist 
//resolve lets us specify files we want to process without actually giving them a file extension
//loaders allow us to preprocess files before we bundle them up 
//test is used to test the files we want
module.exports = {
  entry : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
   resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output : {
    path: __dirname + '/dist',
    filename : 'bundle.js',
    publicPath: '/'
  },
  devServer : {
    contentBase : './dist',
    hot : true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
  
};