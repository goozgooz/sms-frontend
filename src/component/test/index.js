import React from 'react';
import getPhotos from '../../action/photos';

export default class Test extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h2> test page </h2>

        <button onClick={getPhotos}>
          Click Me
        </button>
      </React.Fragment>
    );
  }
};

 