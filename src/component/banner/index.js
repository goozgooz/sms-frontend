import './_banner.scss';

import React from 'react';

class Banner extends React.Component {
  render(){
    return(
      <div className='banner'>
        <img src={require('./assets/bmw-desktop-1.jpg')} />
      </div>
    );
  }
}

export default Banner;