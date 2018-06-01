import './_banner.scss';

import React from 'react';

class Banner extends React.Component {
  render(){
    return(
      <img id='banner' src={require('./assets/dealer.jpg')} />
    );
  }
}

export default Banner;