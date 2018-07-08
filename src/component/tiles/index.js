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
          <Link to='/inventory'> View Inventory </Link>
        </div>
        


       

      </div>
    );
  }
};

export default Tiles;


