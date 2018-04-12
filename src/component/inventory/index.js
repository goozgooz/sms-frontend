import './_inventory.scss';
import React from 'react';
import * as _ from '../../lib/util.js';

import CarForm from './car-form';

class Inventory extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      displayForm: true,
    };
    
    this.toggleForm = this.toggleForm.bind(this);
  }
  
  toggleForm(){
    this.setState({displayForm:!this.state.displayForm});
  }
  
  render(){
    return(
      <React.Fragment>
        <h1> SMS Inventory </h1>
        
        {_.renderIf(this.state.displayForm, 
          <CarForm formSubmit={this.toggleForm}/>,
        )}
        
        {_.renderIf(!this.state.displayForm, 
          <button onClick={this.toggleForm}> click me </button>
        )}
        
      </React.Fragment>
    );
  }
}

export default Inventory;
