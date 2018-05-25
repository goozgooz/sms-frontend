import './_navbar.scss';
import React from 'react';
import * as _ from '../../lib/util.js';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/fontawesome-free-solid';

fontawesome.config = { autoAddCss: false };


// home | inventory | service depart | about us | contact us
      

class MyNavbar extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      showMobileNav: false,
    };
      
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu(e){
    e.preventDefault();
    this.setState({showMobileNav:!this.state.showMobileNav});
  }
  
  render(){
    console.log(this.state);
    return(
      <nav className='navbar'>
        <button id='hamburger' onClick={this.toggleMenu}> 
          <FontAwesomeIcon icon={faBars} size='xs' /> 
        </button>
        {_.renderIf(this.state.showMobileNav,
          <ul id='hamburger-nav'>
            <li> <a href='#'> Home </a> </li>
            <li> <a href='#'> Inventory </a> </li>
            <li> <a href='#'> Service </a> </li>
            <li> <a href='#'> About </a> </li>
            <li> <a href='#'> Contact </a> </li>
          </ul>
        )}
        
        <ul id='regular-nav'>
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