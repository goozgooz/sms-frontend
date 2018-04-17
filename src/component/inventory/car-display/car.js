import './_car-display.scss';
import React from 'react';

class Car extends React.Component{
  constructor(props){
    super(props);
    
    this.removeCar = this.removeCar.bind(this);
  }
  
  removeCar(){
    console.log(this.props.id);
    this.props.remove(this.props.id);
  }
  
  render(){
    return(
      <div className='inventory-item'>
        <h3> Car: {this.props.car.title} </h3>
        <h3> Description: {this.props.car.description} </h3>
        <button onClick={this.removeCar} > X </button>
      </div>
    );
  }
};

export default Car;



// create action / reducer / pass to button 