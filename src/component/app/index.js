import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../landing';
import Admin from '../admin/inventory';
import Inventory from '../inventory';
import Service from '../service';
import About from '../about';
import Contact from '../contact';

import * as actions from '../../action/car.js';

class App extends React.Component {
  componentDidMount(){
    this.props.getCars();
  }
  
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/goozgooz' component={Admin}/>
            <Route exact 
              path='/inventory' 
              render={props => <Inventory {...props} cars={this.props.cars} />} 
            />
            <Route exact path='/service' component={Service}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(actions.getCars()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
