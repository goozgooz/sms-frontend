import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Header from '../header';
import Banner from '../banner';
import Tiles from '../tiles';
import Footer from '../footer';

class Landing extends React.Component{
  render(){
    return(
      <div className='home'>
        <Navbar />
        <div className='layout'>
          <Header />
          <Banner />
          <Tiles />
          <Footer />
        </div>
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
