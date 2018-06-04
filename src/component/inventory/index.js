import './_inventory.scss';
import React from 'react';

import Navbar from '../navbar';

class Inventory extends React.Component {
  render(){
    return (
      <div id='inventory'>
        <Navbar />
        <h1 id='title'> Source Motor's Inventory Page Coming Soon! </h1>
      </div>
    );
  }
}

export default Inventory;