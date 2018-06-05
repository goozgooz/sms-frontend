import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
        <div>
          <Link to='/inventory'> View Inventory </Link>
        </div>
        
        <div>
          <Link to='/'> Vehicle Finder </Link>
        </div>
        
        <div>
          <Link to='/contact'> Contact Us </Link>
        </div>
      </div>
    );
  }
};

export default Tiles;