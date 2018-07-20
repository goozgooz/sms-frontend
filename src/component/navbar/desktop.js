import './_desktop.scss';

import React from 'react';
import {NavLink} from 'react-router-dom';

class DesktopNav extends React.Component {
  render() {
    return (
      <div className='desktop-nav'>
        <div className='nav-wrapper'>
          <NavLink exact activeClassName='active' className='menu-item' to='/'> Home </NavLink>
          <NavLink activeClassName='active' className='menu-item' to='/inventory'> Inventory </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/service'> Service </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/about'> About </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/contact'> Contact </NavLink> 
        </div>
      </div>
    );
  }
};

export default DesktopNav;