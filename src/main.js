import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// to allow for a responsive site
import ReactBreakpoints from 'react-breakpoints';
const breakpoints = {
  mobile: 200,
  desktop: 415,
};

import App from './component/app';
import reducer from './reducer/index.js';
import reporter from './lib/redux-reporter.js';


let store = createStore(reducer, applyMiddleware(reporter));

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ReactBreakpoints breakpoints={breakpoints}>
            <App/>
          </ReactBreakpoints>
        </BrowserRouter>
      </Provider>
    );
  }

}

ReactDom.render(<Main/>, document.getElementById('root'));
