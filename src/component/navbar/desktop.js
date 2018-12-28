import './_desktop.scss';
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

const DesktopNav = () => {
  return (
    <div className='desktop-wrapper'>
      <div className='desktop-nav'>
      
        <Link to='/' className='sms'> SMS </Link>

        <div className='nav-links'>
          <NavLink exact activeClassName='active' className='menu-item' to='/'> Home </NavLink>
          <NavLink activeClassName='active' className='menu-item' to='/inventory'> Inventory </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/service'> Service </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/about'> About </NavLink> 
          <NavLink activeClassName='active' className='menu-item' to='/contact'> Contact </NavLink>
        </div>

        <div className='nav-icons'>
          <a href='tel:+14255625131'> 
            <FontAwesomeIcon icon={faPhone} className='icon'/>
          </a>
          <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/> 
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default DesktopNav;