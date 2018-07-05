import './_header.scss';

import React from 'react';

class Header extends React.Component{
  render(){
    return (
      <div className='header'>
        <h1> SOURCE MOTOR SALES </h1>
        <h2> 2420 NE 21st Belleve, WA 98005 </h2>  
        <h2> 425-555-5555 </h2> 
      </div>
    );
  }
}

export default Header;

