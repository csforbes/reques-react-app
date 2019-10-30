const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common.js');
const stagingConfig = require('./webpack.config.staging.js');

module.exports = ({ env, staging }) => {
    const envConfig = require(`./webpack.config.${env}.js`);
    return webpackMerge(commonConfig, envConfig, staging && stagingConfig);
};