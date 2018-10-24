import './_inventory.scss';
import './_car.scss';
import React from 'react';

import Loader from 'react-loader-spinner';
import Car from './car.js';

import * as _ from '../../lib/util.js';

class InventoryDisplay extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {inventory, photos, handleCarClick} = this.props;
    
    return (
      <div className='car-list'>
        {Object.keys(inventory).map((car, i) => (
          <div 
            key={i} 
            className='car-item'
            onClick={(data) => handleCarClick(inventory[car])}
          >
          
            <Car 
              car={inventory[car]} 
              folders={photos}
              displayFull={false} 

            />

          </div>
        ))}
      </div>
    );
  }
};

export default InventoryDisplay;