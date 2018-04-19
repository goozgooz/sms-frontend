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
      displayInventory: true,
    };
    
    this.toggler = this.toggler.bind(this);
    this.addCar = this.addCar.bind(this);
  }
  
  toggler(){
    this.setState({displayForm:!this.state.displayForm});
    this.setState({displayInventory:!this.state.displayInventory});
  }
  
  
  addCar(data) {
    this.props.carCreate(data);
    this.toggler();
  }
  
  render(){
    return(
      <React.Fragment>
        <h1> SMS Inventory </h1>
        
        {_.renderIf(this.state.displayForm, 
          <CarForm formSubmit={this.addCar}/>,
          <button onClick={this.toggler}> Add Car </button>
        )}
        
        
        {_.renderIf(this.state.displayInventory,
          <CarDisplay 
            inventory={this.props.cars}
            remove={this.props.carRemove}
            toggler={this.toggler}
          />
        )}
        
        
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
    carRemove: (id) => dispatch(action.remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
