import './_inventory.scss';
import './_car.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Footer from '../footer';
import Car from './car.js';
import Map from '../map';
import InventoryDisplay from './inventory-display.js';
import LoadingIcon from '../loader';

import * as _ from '../../lib/util.js';
import * as cars from '../../action/car.js';
import * as photos from '../../action/photos.js';

class Inventory extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      focusCar: false,
      activeCar: {},
    };
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }
  
  componentDidUpdate(){
    window.scrollTo(0,0);
  }
  
  handleBack(e){
    this.setState({
      focusCar: !this.state.focusCar,
      activeCar: {},
    });
  }

  handleCarClick(car, e){
    this.setState({
      focusCar: !this.state.focusCar, 
      activeCar: car,
    });
  }

  render(){
    let {inventory, photos} = this.props;
    let {activeCar, focusCar} = this.state;
    
    return (
      <React.Fragment>
        <Navbar />
        
        <div className = 'inventory-container'>
          {_.renderIf(!focusCar,
            <React.Fragment>
              <h3> Inventory </h3>              
              <p> At Source Motors, I specialize in tracking down and finding the exact right car for you. As a result, I keep a relatively small inventory, so if you don't see what you like please reach out and <Link to='/contact' className='inline-link'>contact me</Link> today, and together we can find the exact right car for you. 
              </p>
              
              {_.renderIf(Object.keys(inventory).length && Object.keys(photos).length,
                <InventoryDisplay 
                  inventory={inventory}
                  photos={photos}
                />

                ,
                
                <LoadingIcon />
              )}
            </React.Fragment>
            
            ,
            
            <div className='car-item focus'>
              <Car 
                car={activeCar} 
                displayFull={true}  
                back={this.handleBack}
              />
            </div>
            
          )}
  
        </div>
        
        <Map />
        <Footer />
        
      </React.Fragment>
 
    );
  }
}


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