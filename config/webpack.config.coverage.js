const webpackConfig = require('./webpack.config.test');

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.ts$/,
    enforce: 'post',
    loader: 'istanbul-instrumenter-loader',
    exclude: [
      './node_modules/',
      './typings/'
    ],
    query: {
      esModules: true
    }
  }
];

module.exports = webpackConfig;
