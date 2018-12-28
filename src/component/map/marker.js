import './_map.scss';
import React from 'react';

const Marker = () => {
  return(
    <div>
      <img className='marker' src={require('./marker.png')} />
    </div>
  );
};

export default Marker;