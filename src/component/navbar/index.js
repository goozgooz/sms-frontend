import './_navbar.scss';
import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/fontawesome-free-solid';

fontawesome.config = { autoAddCss: false };


// home | inventory | service depart | about us | contact us
      

class MyNavbar extends React.Component {
  render(){
    return(
      <nav className='navbar'>
        <button id='hamburger'> <FontAwesomeIcon icon={faBars} size='xs' /> </button>   
        <ul id='nav-menu'>
          <li> <a href='#'> Home </a> </li>
          <li> <a href='#'> Inventory </a> </li>
          <li> <a href='#'> Service </a> </li>
          <li> <a href='#'> About </a> </li>
          <li> <a href='#'> Contact </a> </li>
        </ul>
        
      </nav>
    );
  }
}

export default MyNavbar;