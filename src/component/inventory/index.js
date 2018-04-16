import './_inventory.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as _ from '../../lib/util.js';

// React Components
import CarForm from './car-form';
import CarDisplay from './car-display/index.js';

// Import Actions
import * as action from '../../action/car';

class Inventory extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      displayForm: false,
    };
    
    this.toggleForm = this.toggleForm.bind(this);
    this.addCar = this.addCar.bind(this);
  }
  
  toggleForm(){
    this.setState({displayForm:!this.state.displayForm});
  }
  
  addCar(data) {
    this.props.carCreate(data);
    this.toggleForm();
  }
  
  render(){
    return(
      <React.Fragment>
        <h1> SMS Inventory </h1>
        
        {_.renderIf(this.state.displayForm, 
          <CarForm formSubmit={this.addCar}/>,
          <button onClick={this.toggleForm}> click me </button>
        )}
        
        
        <CarDisplay 
          inventory={this.props.cars}
        /> 
        
        
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
    carCreate: (data) => dispatch(action.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
