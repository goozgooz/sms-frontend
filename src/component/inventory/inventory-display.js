import './_inventory.scss';
import './_car.scss';
import React from 'react';
import Car from './car.js';


const InventoryDisplay = (props) => {
  let {inventory, photos} = props;
  
  return (
    <div className='car-list'>
    
      {Object.keys(inventory).map((car, i) => (
        <div 
          key={i} 
          className='car-item'
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
};


export default InventoryDisplay;