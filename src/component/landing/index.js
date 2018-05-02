import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

class Landing extends React.Component{
  render(){
    return(
      <div>
        <h1> sup fam </h1>
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
