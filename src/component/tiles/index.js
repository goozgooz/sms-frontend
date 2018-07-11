import './_tiles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Map from '../map';
          
        // <div className='map-containter'>
        //   <Map />        
        // </div>

class Tiles extends React.Component {
  render(){
    return (
      <div className='tiles'>
        <div className='link'>
          <p> Look to see what we have in stock! </p>
          <Link className='first' to='/inventory'> View Inventory </Link>
        </div>

        <div className='link'>
          <Link className='second' to='/contact'> Car Finder </Link>
          <p> Reach out to me to find the car for you </p>
        </div>

        <Map />
        


       

      </div>
    );
  }
};

export default Tiles;


