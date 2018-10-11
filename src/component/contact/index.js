import './_contact.scss';
import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';
import Map from '../map';

class Contact extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        
        <div className='contact-container'>
          <h3 className='title'> Contact Me </h3>
          
          <div className='contact-header'>
            <h4> Buying or selling a car? </h4>
            <h4> Need help finding a car? </h4>
            <h4> Need some work done to your car? </h4>
            <h4> Don't hesitate to reach out to me! </h4>
        
            <h4 className='special'> Reza Jaberi </h4>

            <a href="tel: +14255625131">
              <h4> <span> Phone: </span> 425-562-5131 </h4>
            </a>        

            <h4> <span> Email: </span> sourcemotors@gmail.com </h4>
          </div>


          <Map />
        </div>
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;