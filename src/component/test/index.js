import React from 'react';
import {connect} from 'react-redux';
import * as photos from '../../action/photos';

class Test extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h2> test page </h2>

        <button onClick={this.props.fetchPhotos}>
          Click Me
        </button>
      </React.Fragment>
    );
  }
};


const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(photos.fetchPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);