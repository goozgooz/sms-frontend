import './_loader.scss';

import React from 'react';
import Loader from 'react-loader-spinner';

class LoadingIcon extends React.Component {
  render(){
    return(
      <div className='spinner'>
        <Loader 
          type="Oval"
          color="#258e9f"
          height="100"	
          width="100"
        />   
      </div>
    );
  }
};

export default LoadingIcon;