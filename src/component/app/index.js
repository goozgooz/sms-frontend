import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../landing';
import Admin from '../admin/inventory';
import Inventory from '../inventory';
import Service from '../service';
import About from '../about';
import Contact from '../contact';
import Construction from '../construction';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/goozgooz' component={Admin}/>
            <Route exact path='/inventory' component={Construction} />
            {/* <Route exact path='/inventory' component={Inventory} /> */}
            <Route exact path='/service' component={Service}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
