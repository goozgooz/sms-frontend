import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer/index.js';
import reporter from './lib/redux-reporter.js';

let store = createStore(reducer, applyMiddleware(reporter));

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  container);