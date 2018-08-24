import './_footer.scss';

import React from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component {
  render(){
    return (
      <div className='footer'>
        <hr />
        
        <div className='links'>
          <NavLink exact activeClassName='active' className='menu-item' to='/'> Home </NavLink>
          <span> | </span>
          <NavLink activeClassName='active' className='menu-item' to='/inventory'> Inventory </NavLink>
          <span> | </span>
          <NavLink activeClassName='active' className='menu-item' to='/service'> Service </NavLink> 
          <span> | </span>
          <NavLink activeClassName='active' className='menu-item' to='/about'> About </NavLink> 
          <span> | </span>
          <NavLink activeClassName='active' className='menu-item' to='/contact'> Contact </NavLink>
        </div>

        <div className='info'>
          <h5> Source Motor Sales & Service </h5>
          <a href='https://www.google.com/maps/dir//Source+Motor+Sales,+13407+NE+20th+St+%233,+Bellevue,+WA+98005/'target='_blank'>
            <h5> 13407 NE 20th St #3 Bellevue, WA 98005 </h5>
          </a>
          
          <a href="tel: +14255625131">
            <h5> 425-562-5131 </h5>
          </a>        
        </div>

      </div>
    );
  }
}

export default Footer;
