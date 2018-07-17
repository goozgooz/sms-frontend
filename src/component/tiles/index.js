import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Map from '../map';


class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
      
        <hr /> 
        
        <div className='link'>
          <img src={require('./assets/showroom.jpg')} />
          <Link className='first' to='/inventory'> View Inventory </Link>
        </div>

        <hr /> 

        <div className='link'>
          <img src={require('./assets/tools.jpg')} />
          <Link className='second' to='/service'> Service Department </Link>
        </div>

        <hr />
        
        <div className='map-container'>
          <Map />
        </div>
        
      </div>
    );
  }
};

export default Tiles;


