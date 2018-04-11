import './_inventory.scss';
import React from 'react';

import CarForm from './car-form';

class Inventory extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <h1> SMS Inventory </h1>  
        <CarForm />
      </React.Fragment>
    );
  }
}

export default Inventory;
