/************************************
        ARTSHARE REACT
  Written and Owned by: Jesse Lewis
*************************************/
const sslRedirect = require('heroku-ssl-redirect');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
