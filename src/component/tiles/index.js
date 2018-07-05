import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Map from '../map';
          

class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
        <div className='links'>
          <Link to='/inventory'> View Inventory </Link>
        </div>
        
        <Map />        

       

      </div>
    );
  }
};

export default Tiles;


