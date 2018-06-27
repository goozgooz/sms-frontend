import './_desktop.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class DesktopNav extends React.Component {
  render() {
    return (
      <div className='desktop-nav'>
        <div className='nav-wrapper'>
          <Link className='menu-item' to='/'> Home </Link>
          <Link className='menu-item' to='/inventory'> Inventory </Link> 
          <Link className='menu-item' to='/service'> Service </Link> 
          <Link className='menu-item' to='/about'> About </Link> 
          <Link className='menu-item' to='/contact'> Contact </Link> 
        </div>
      </div>
    );
  }
};

export default DesktopNav;