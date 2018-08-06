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
          
          <ul>
            <li> Buying or selling a car? </li>
            <li> Need help finding a car? </li>
            <li> Need some work done to your car? </li>
            <li className='emphasis'> Don't hesitate to reach out to me! </li>
          </ul>
          
          <div className='contact-section'> 
            <div className='section-header'>
              <h4> Contact Information </h4>
              <span className='line' />
            </div>

            <a href="tel: +14255625131">
              <h5> Phone: 425-562-5131 </h5>
            </a>        

            <h5> Email: sourcemotors@gmail.com </h5>
          </div>
          
          <div className='contact-section'>
            <div className='section-header'>
              <h4> Business Hours </h4>
              <span className='line' />
            </div>

            <h5> Monday-Friday: 8am-5pm </h5>
            <h5> Saturday: By Appointment Only </h5>
            <div className='map-container'>
              <Map />
            </div>
          </div>
        
        <Footer />

        </div>
      </div>
    );
  }
}

export default Contact;