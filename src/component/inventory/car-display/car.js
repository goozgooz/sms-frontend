import './_car-display.scss';
import React from 'react';
import * as _ from '../../../lib/util.js';

import EditCarForm from '../car-form/edit-form.js';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/fontawesome-free-regular';
fontawesome.config = { autoAddCss: false };

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
    return(
      <React.Fragment>
        <div className='inventory-item'>
          <img src={require('./dev-car.jpg')} /> 
          
          <div className='car-info'>
            <h3> Car: <span> {car.title} </span> </h3>
            <h3> Description: <span> {car.description} </span> </h3>
          </div>
          
          <div className='car-buttons'>
            {_.renderIf(!this.state.showEditForm, 
              <button onClick={this.toggleEdit}> <FontAwesomeIcon icon={faEdit} size='2x' /> </button>
            )}
            <button onClick={this.removeCar}> <FontAwesomeIcon icon={faTrashAlt} size='2x' /></button>
          </div>
          
        </div>

        {_.renderIf(this.state.showEditForm, 
          <EditCarForm 
            data={car}
            id={id}
            formSubmit={this.formSubmit}
          />
        )}
        
      </React.Fragment>
    );
  }
};

export default Car;


