import './_footer.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render(){
    return (
      <div className='footer'>
        
        <div className='links'>
          <Link exact activeClassName='active' className='menu-item' to='/'> Home </Link>
          <span> | </span>
          <Link activeClassName='active' className='menu-item' to='/inventory'> Inventory </Link>
          <span> | </span>
          <Link activeClassName='active' className='menu-item' to='/service'> Service </Link> 
          <span> | </span>
          <Link activeClassName='active' className='menu-item' to='/about'> About </Link> 
          <span> | </span>
          <Link activeClassName='active' className='menu-item' to='/contact'> Contact </Link>
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
