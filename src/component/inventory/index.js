import './_inventory.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

class Inventory extends React.Component {
  render(){
    return (
      <div className='inventory'>
        <Navbar />
        <h1> Source Motor's Inventory Page Coming Soon! </h1>
        <Footer />
      </div>
    );
  }
}

export default Inventory;