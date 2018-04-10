import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from '../dashboard';
import Inventory from '../inventory';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/goozgooz' component={Inventory}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
