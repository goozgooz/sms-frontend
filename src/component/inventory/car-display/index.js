import React from 'react';
import Car from './car.js';

class CarDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.displayCar = this.displayCar.bind(this);
  }
  
  displayCar(){
    let {inventory} = this.props;
    
    return Object.keys(inventory).map((id,i) => {
      <Car car={inventory[id].car} key={i} />;
    });
  }
  
  render(){
    return(
      <React.Fragment>
        <h3> Current Inventory </h3>  
        {this.displayCar()}
      </React.Fragment>
    );
  }
}

export default CarDisplay;