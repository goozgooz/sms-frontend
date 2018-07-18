import './_about.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

class About extends React.Component {
  render(){
    return (
      <div className='about'>
        <Navbar />
        <h1> About Us Page Coming Soon! </h1>
        <Footer />
      </div>
    );
  }
}

export default About;