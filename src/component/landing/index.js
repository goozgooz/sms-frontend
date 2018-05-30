import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Header from '../header';
import Banner from '../banner';
import Tiles from '../tiles';

class Landing extends React.Component{
  render(){
    return(
      <div id='home'>
        <Navbar />
        <Header />
        <Banner />
        <Tiles />
      </div>
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
