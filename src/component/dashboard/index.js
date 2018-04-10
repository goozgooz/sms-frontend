import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
  render(){
    return(
      <h1> sup fam </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
