import React from 'react';
import {connect} from 'react-redux';
import * as _ from '../../lib/util.js';

class Test extends React.Component {
  constructor(props){
    super(props);
    
    this.testRender.bind(this);
  }
  
  testRender() {
    return <h2> Test </h2>
  }
  
  
  render(){
    return(
      <React.Fragment>
        {this.testRender()}
      </React.Fragment>
    );
  }
};


let mapStateToProps = (state) => {
  return {
    inventory: state.cars,
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(Test);