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
          
          <h1> Contact Me </h1>
          
          <hr/>
          
          <ul>
            <li> Buying or selling a car? </li>
            {/* <li> Selling a car? </li> */}
            <li> Want help finding a car? </li>
            <li> Need some work done to your car? </li>
            <li className='emphasis'> Don't hesitate to reach out to me! </li>
          </ul>
          
          <div className='contact-info'> 
            <h4> Contact Information </h4>
            <h5> Phone: </h5> 
            <h5> Email: </h5>
          </div>
          
          <div className='office-info'>
            <h4> Business Hours: </h4>
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