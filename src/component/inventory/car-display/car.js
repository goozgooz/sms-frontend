import './_car-display.scss';
import React from 'react';
import * as _ from '../../../lib/util.js';

import CarForm from '../car-form';

class Car extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      displayForm: false,
      editing: false,
    };
    
    this.removeCar = this.removeCar.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  
  removeCar(){
    this.props.remove(this.props.id);
  }
  
  toggleForm(){
    // hide all other cars in inventory
    // populate form with the current car
    // submit -> update state -> show cars 
    this.setState({
      displayForm:!this.state.displayForm,
      editing:!this.state.editing,
    });
  }
  
  render(){
    let {car} = this.props.car;
    return(
      <div className='inventory-item'>
        <h3> Car: {car.title} </h3>
        <h3> Description: {car.description} </h3>
        <button onClick={this.removeCar}> X </button>
        
        {_.renderIf(!this.state.editing, 
          <button onClick={this.toggleForm}> Edit </button>
        )}
        
        {_.renderIf(this.state.displayForm, 
          <CarForm />
        )}
      </div>
    );
  }
};

export default Car;


