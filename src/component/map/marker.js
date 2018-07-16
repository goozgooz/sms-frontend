import './_maps.scss';

import React from 'react';


class Marker extends React.Component {
  render(){
    return(
      <img className='marker' src={require('./marker.png')} />
    );
  }
}

export default Marker;