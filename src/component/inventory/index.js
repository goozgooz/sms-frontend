import './_inventory.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

class Inventory extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <div className = 'inventory-container'>
          <h2> Inventory Page </h2>
        </div>
        <Footer />
      </React.Fragment>
 
    );
  }
}

export default Inventory;