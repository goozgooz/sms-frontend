import './_maps.scss';

import React from 'react';


class Marker extends React.Component {
  render(){
    return(
      <div>
        <img className='marker' src={require('./marker.png')} />
      </div>
    );
  }
}

export default Marker;