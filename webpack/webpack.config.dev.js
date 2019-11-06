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
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true,
    },
    devtool: 'eval-source-map',
  };