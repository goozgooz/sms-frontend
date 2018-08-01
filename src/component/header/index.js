import './_header.scss';

import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

class Header extends React.Component{
  render(){
    return (
      <div className='header'>
        <h1> SOURCE MOTOR SALES & SERVICE </h1>
      
        <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
          <h2> 13407 NE 20th St #3 Bellevue, WA 98005 </h2>
        </a>

        <a className='call' href="tel: +14255625131">
          <FontAwesomeIcon icon={faPhone} className='icon' />
          <h2> 425-562-5131 </h2> 
        </a>

      </div>
    );
  }
}

export default Header;

