import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import Header from '../header';
import Welcome from '../welcome';
import Tiles from '../tiles';
import Map from '../map';
import Footer from '../footer';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    window.scrollTo(0,0);
  }
  
  componentDidUpdate(){
    window.scrollTo(0,0);
  }
  
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Header />  
        <Welcome />
        <Tiles />
        <Map />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
