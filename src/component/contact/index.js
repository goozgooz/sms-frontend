import './_contact.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';
import Map from '../map';

class Contact extends React.Component {
  render(){
    return (
      <div className='contact-page'>
        <Navbar />
        
        <div className='layout'>
          
          <h1> Contact Me! </h1>
          
          <ul>
            <li> Buying a car? </li>
            <li> Selling a car? </li>
            <li> Want help finding a car? </li>
            <li> Need some work done to your car? </li>
            <li> Don't hesitate to reach out to me! </li>
          </ul>
          
          <div className='contact-info'> 
            <h3> Contact Information </h3>
            <h3> Phone: </h3> 
            <h3> Email: </h3>
          </div>
          
          <div className='office-info'>
            <h3> Business Hours: </h3>
            <div className='map-container'>
              <Map />
            </div>
          </div>
        
      
        
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Contact;