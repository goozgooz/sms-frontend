import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Landing from '../landing';
import Admin from '../admin/inventory';
import Inventory from '../inventory';
import Service from '../service';
import About from '../about';
import Contact from '../contact';
// import Construction from '../construction';

import * as cars from '../../action/car.js';
import * as photos from '../../action/photos.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.getCars();
    this.props.getPhotos();
  }
  
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/goozgooz' component={Admin}/>
            <Route exact path='/inventory' component={Inventory} />
            <Route exact path='/service' component={Service}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = ({
  getCars: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  cars: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
});

let mapStateToProps = (state) => {
  return {
    cars: state.cars,
    photos: state.photos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(cars.getCars()),
    getPhotos: () => dispatch(photos.fetchPhotos()),
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);