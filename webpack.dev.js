const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const port = process.env.PORT || 3000;


module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true,
  },
});


