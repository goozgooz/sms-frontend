import './_navbar.scss';
import React from 'react';

import {Link} from 'react-router-dom';
import * as _ from '../../lib/util.js';

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
    return(
      <div className='navbar'>
      
        <div className='mobile'>
          {_.renderIf(this.state.showMobileNav, 
            <button onClick={this.toggleMenu}>
              <img className='close' src={require('./close.png')} />
            </button>,
            <button onClick={this.toggleMenu}> 
              <img src={require('./hamburger.png')} /> 
            </button>
          )}
          
          <div className='logo-placeholder'> SMS </div>
          
          {_.renderIf(this.state.showMobileNav,
            <ul>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/inventory'> Inventory </Link> </li>
              <li> <Link to='/service'> Service </Link> </li>
              <li> <Link to='/about'> About </Link> </li>
              <li> <Link to='/contact'> Contact </Link> </li>
            </ul>
          )}
        </div>
        
        <div className='regular'>
          <ul>
            <li> <a href='#'> Home </a> </li>
            <li> <a href='#'> Inventory </a> </li>
            <li> <a href='#'> Service </a> </li>
            <li> <a href='#'> About </a> </li>
            <li> <a href='#'> Contact </a> </li>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default MyNavbar;