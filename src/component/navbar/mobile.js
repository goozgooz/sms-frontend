import './_mobile.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import {fallDown as Menu} from 'react-burger-menu';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

class MobileNav extends React.Component {
  showSettings(e){
    e.preventDefault();
  }
  
  constructor(props){
    super(props);
  }
    
  render(){
    return(
      <div className='navbar'>
        <div className='logo'>
          <Link className='menu-item' to='/'> SMS </Link>
        </div>
        <div className='contact-icon-holder'> 
          <a href='tel:+14255625131'> 
            <FontAwesomeIcon icon={faPhone} className='icon' />
          </a>
          <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/> 
          </a>
        </div>
        <Menu width={'100%'}>
          <Link className='menu-item' to='/'> Home </Link>
          <Link className='menu-item' to='/inventory'> Inventory </Link> 
          <Link className='menu-item' to='/service'> Service </Link> 
          <Link className='menu-item' to='/about'> About </Link> 
          <Link className='menu-item' to='/contact'> Contact </Link> 
        </Menu>
      </div>

    );
  }
}

export default MobileNav;

