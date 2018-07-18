import './_footer.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render(){
    return (
      <div className='footer'>
        <hr />
        
        <div className='links'>
          <Link className='menu-item' to='/'> Home </Link>
          <Link className='menu-item' to='/inventory'> Inventory </Link> 
          <Link className='menu-item' to='/service'> Service </Link> 
          <Link className='menu-item' to='/about'> About </Link> 
          <Link className='menu-item' to='/contact'> Contact </Link> 
        </div>
        
        <div className='info'>
          <h5> Source Motor Sales & Service </h5>
          <h5> 2420 NE 21st Bellevue, WA 98005 </h5>
          <h5> 425-666-5000 </h5>
        </div>

      </div>
    );
  }
}

export default Footer;
