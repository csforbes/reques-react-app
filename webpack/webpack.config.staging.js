const { DefinePlugin } = require('webpack');

module.exports = {
  plugins: [
    new DefinePlugin({
      STAGING: JSON.stringify(true),
    }),
  ],
};