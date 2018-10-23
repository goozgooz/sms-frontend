import React from 'react';
import {connect} from 'react-redux';
import * as _ from '../../lib/util.js';

class Test extends React.Component {
  render(){
    return(
      <div />
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