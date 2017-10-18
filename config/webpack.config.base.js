const helpers = require('./helpers'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: {
    'main': helpers.root('/src/main.ts')
  },
  output: {
    path: helpers.root('/dist'),
    filename: 'js/[name].[hash].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [{
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: [
          './node_modules/',
          './typings/'
        ]
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [
          './node_modules/',
          './typings/'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [
          './node_modules/',
          './typings/',
          './src/index.html'
        ]
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: './assets'
    }, ]),
  ]
};

module.exports = config;
