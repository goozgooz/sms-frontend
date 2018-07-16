import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Map from '../map';

//           <img src={require('./assets/showroom.jpg')} />
          
class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
      
        <hr /> 
        
        <div className='link'>

          <Link className='first' to='/inventory'> View Inventory </Link>
        </div>

        <div className='link'>
          <Link className='second' to='/service'> Service Department </Link>
        </div>

        <Map />
        
      </div>
    );
  }
};

export default Tiles;


