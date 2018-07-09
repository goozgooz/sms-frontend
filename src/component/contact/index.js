import './_contact.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

class Contact extends React.Component {
  render(){
    return (
      <div className='contact'>
        <Navbar />
        <h1> Contact Page Coming Soon! </h1>
        <Footer />
      </div>
    );
  }
}

export default Contact;