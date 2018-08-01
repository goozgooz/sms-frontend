import './_construction.scss';

import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

class Construction extends React.Component {
  render(){
    return (
      <div className='construction'>
        <Navbar />
        <h1> This Page is Under Construction </h1>
        <Footer className='footer' />
      </div>
    );
  }
}

export default Construction;