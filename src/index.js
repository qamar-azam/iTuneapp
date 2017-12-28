import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import store from './store';
import { Provider } from 'react-redux'


ReactDOM.render(
  	<BrowserRouter>        
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
