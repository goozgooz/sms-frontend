import './_car-display.scss';
import React from 'react';
import * as _ from '../../../lib/util.js';

import EditCarForm from '../car-form/edit-form.js';

class Car extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      showEditForm: false,
    };
    
    this.removeCar = this.removeCar.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  
  removeCar(){
    this.props.remove(this.props.id);
  }
  
  toggleEdit(){
    this.setState({showEditForm:!this.state.showEditForm});
  }
  
  formSubmit(car){
    this.toggleEdit();
    let data = {
      id: this.props.id,
      car: car,
    };
    this.props.edit(data);
  }
  
  render(){
    let {car,id} = this.props.car;
    console.log(car);
    return(
      <div className='inventory-item'>
        <img src={require('./dev-car.jpg')} /> 
        <h3> Car: {car.title} </h3>
        <h3> Description: {car.description} </h3>
        <button onClick={this.removeCar} className='submit-button'> X </button>
        
        {_.renderIf(!this.state.showEditForm, 
          <button onClick={this.toggleEdit} className='submit-button'> Edit </button>
        )}
        
        {_.renderIf(this.state.showEditForm, 
          <EditCarForm 
            data={car}
            id={id}
            formSubmit={this.formSubmit}
          />
        )}
      </div>
    );
  }
};

export default Car;


