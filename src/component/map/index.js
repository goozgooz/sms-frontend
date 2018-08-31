import './_map.scss';

import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

import GoogleMap from './google-map.js';

class Map extends React.Component{
  render(){
    return(
      <div className='map'>
        <div className='location-info'>
          <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/> 
            <div className='location'>
              <h3> 13407 NE 20th St #3 </h3>
              <h3> Bellevue, WA 98005 </h3>
            </div>
          </a>

          <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
            <FontAwesomeIcon icon={faPhone} className='icon'/> 
            <h3> 425-562-5131 </h3>
          </a>
        </div>     

        <div className='map-container'>
          <GoogleMap />  
        </div>
      </div>
    );
  }
}

export default Map;