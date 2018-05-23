import './_navbar.scss';
import React from 'react';

// home | inventory | service depart | about us | contact us


class MyNavbar extends React.Component {
  render(){
    return(
      <nav className='navbar'>
        <ul>
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