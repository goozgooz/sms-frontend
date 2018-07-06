import './_service.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

class Service extends React.Component {
  render(){
    return (
      <div className='service'>
        <Navbar />
        <h1> Source Motor's Service Department Page Coming Soon! </h1>
        <Footer />
      </div>
    );
  }
}

export default Service;