import './_mobile.scss';
import React from 'react';

import {Link} from 'react-router-dom';

import {stack as Menu} from 'react-burger-menu';

class MobileNav extends React.Component {
  showSettings(e){
    e.preventDefault();
  }
  
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
  // <div className='logo'>
  //   <Link to='/'> SMS </Link>
  // </div>
  
  render(){
    return(
      <div className='navbar'>
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
