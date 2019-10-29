import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React with Webpack and Babel';

console.log(process.env.NODE_ENV);

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

module.hot.accept();