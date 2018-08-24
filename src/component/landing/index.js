import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Header from '../header';
import Welcome from '../welcome';

class Landing extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Header />  
        <Welcome />
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
