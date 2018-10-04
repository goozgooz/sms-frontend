import './_inventory.scss';
import React from 'react';

import Construction from '../construction';

class Inventory extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    console.log('INVENTORY', this.props.cars);
    return (
      <Construction />
    );
  }
}

export default Inventory;