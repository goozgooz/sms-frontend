import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCar, faWrench, faPhone} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
      
      
        <div className='tile-item'>
          <h3> View Inventory </h3>
          <Link to='/inventory'>  
            <FontAwesomeIcon icon={faCar} className='icon' />
          </Link>
        </div>

        <div className='tile-item'>
          <h3> Service Department </h3>
          <Link to='/service'>  
            <FontAwesomeIcon icon={faWrench} className='icon' />
          </Link>
        </div>

        <div className='tile-item'>
          <h3> Contact Me </h3>
          <Link to='/contact'>  
            <FontAwesomeIcon icon={faPhone} className='icon' />
          </Link>
        </div>
        
      </div>
    );
  }
};

export default Tiles;


