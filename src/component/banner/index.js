import './_banner.scss';

import React from 'react';

class Banner extends React.Component {
  render(){
    return(
      <div className='banner'>
        <img src={require('./assets/dealer.jpg')} />
      </div>
    );
  }
}

export default Banner;