import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const title = 'React with Webpack and Babel: ' + (typeof STAGING === 'undefined' ? 'Prod' : STAGING && 'UAT');

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV, "UAT", typeof STAGING === 'undefined' ? false : STAGING);

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

module.hot.accept();