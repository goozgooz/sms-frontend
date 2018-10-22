import React from 'react';
import Loader from 'react-loader-spinner';

class Test extends React.Component {
  render(){
    return(
      <Loader 
        type="Oval"
        color="#258e9f"
        height="100"	
        width="100"
      />   
    );
  }
};


export default Test;