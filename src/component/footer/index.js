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
          <span> | </span>
          <Link className='menu-item' to='/inventory'> Inventory </Link> 
          <span> | </span>
          <Link className='menu-item' to='/service'> Service </Link> 
          <span> | </span>
          <Link className='menu-item' to='/about'> About </Link> 
          <span> | </span>
          <Link className='menu-item' to='/contact'> Contact </Link> 
        </div>

        <div className='info'>
          <h5> Source Motor Sales & Service </h5>
          <h5> 13407 NE 20th St #3 Bellevue, WA 98005 </h5>
          <h5> 425-562-5131 </h5>
        </div>

      </div>
    );
  }
}

export default Footer;
