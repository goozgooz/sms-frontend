import './_tiles.scss';

import React from 'react';

class Tiles extends React.Component {
  render(){
    return (
      <div id='tiles'>
        <div>
          <h2> View Inventory </h2>
        </div>
        
        <div>
          <h2> Vehicle Finder </h2>
        </div>
        
        <div>
          <h2> Contact Us </h2>
        </div>
      </div>
    );
  }
};

export default Tiles;