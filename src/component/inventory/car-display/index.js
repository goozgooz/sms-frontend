import React from 'react';
import Car from './car.js';

class CarDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.displayCar = this.displayCar.bind(this);
  }
  
  displayCar(){
    let {inventory, remove, edit} = this.props;
    
    return Object.keys(inventory).map((id,i) => (
      <Car 
        car={inventory[id]} 
        id={id}
        key={i} 
        edit={edit}
        remove={remove}
      />
    ));
  }
  
  render(){
    return(
      <div className='inventory-wrapper'>
        {this.displayCar()}
      </div>
    );
  }
}

export default CarDisplay;