import React from 'react';
import Car from './car.js';

class CarDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.displayCar = this.displayCar.bind(this);
  }
  
  displayCar(){
    let {inventory} = this.props;
    return Object.keys(inventory).map((id,i) => (
      <Car 
        car={inventory[id].car} 
        id={id}
        key={i} 
        remove={this.props.remove}
        toggleForm={this.props.toggleForm}
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