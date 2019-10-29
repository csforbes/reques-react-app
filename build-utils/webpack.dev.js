const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [
      new HotModuleReplacementPlugin(),
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        }
      }),
    ],
    devtool: 'eval-source-map',
  };