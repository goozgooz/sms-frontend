import './_inventory.scss';
import './_car.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Footer from '../footer';
import Car from './car.js';
import Map from '../map';

import * as _ from '../../lib/util.js';
import * as actions from '../../action/car.js';

class Inventory extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      focusCar: false,
      activeCar: {},
    };
    
    this.props.getCars();
    
    this.handleCarClick = this.handleCarClick.bind(this);
  }

  handleCarClick(car, e){
    console.log(car);
    this.setState({focusCar: !this.state.focusCar});
  }

  render(){
    let {cars} = this.props;
    
    return (
      <React.Fragment>
      
        <Navbar />
        
        <div className = 'inventory-container'>
          <button onClick={this.handleCarClick}> click me </button>
          
          {_.renderIf(!this.state.focusCar,
            <React.Fragment>
              <h3> Inventory </h3>
              
              <p> 
                At Source Motors, I specialize in tracking down and finding the exact right car for you. As a result, I keep a relatively small inventory, so if you don't see what you like please reach out and <Link to='/contact' className='inline-link'>contact me</Link> today, and together we can find the exact right car for you. 
              </p>
              
              {_.renderIf(Object.keys(cars).length,
                <div className='car-list'>
                  {Object.keys(cars).map((car, i) => (
                    <div 
                      key={i} 
                      className='car-item'
                      onClick={(e) => this.handleCarClick(cars[car])}
                    >
                    
                      <Car car={cars[car]}  />
                      
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
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
    cars: state.cars,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(actions.getCars()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);