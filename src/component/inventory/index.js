import './_inventory.scss';
import './_car.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../navbar';
import Footer from '../footer';
import Map from '../map';
import InventoryDisplay from './inventory-display.js';
import LoadingIcon from '../loader';

import * as _ from '../../lib/util.js';
import * as cars from '../../action/car.js';
import * as photos from '../../action/photos.js';

class Inventory extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }
  
  render(){
    let {inventory, photos} = this.props;
    return (
      <React.Fragment>
        <Navbar />
        
        <div className = 'inventory-container'>
          <h3> Inventory </h3>              
          <p> At Source Motors, I specialize in tracking down and finding the exact right car for you. As a result, I keep a relatively small inventory, so if you don't see what you like please reach out and <Link to='/contact' className='inline-link'>contact me</Link> today, and together we can find the exact right car for you. 
          </p>
          
          {_.renderIf(Object.keys(inventory).length && Object.keys(photos).length,
            <InventoryDisplay 
              inventory={inventory}
              photos={photos}
              handleCarClick={this.handleCarClick}
            />

            ,
            
            <LoadingIcon />
          )}
           
        </div>
        
        <Map />
        <Footer />
        
      </React.Fragment>
 
    );
  }
}

Inventory.propTypes = ({
  inventory: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
})

let mapStateToProps = (state) => {
  return {
    inventory: state.cars,
    photos: state.photos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(cars.getCars()),
    getPhotos: () => dispatch(photos.fetchPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);