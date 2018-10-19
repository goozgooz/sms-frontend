import React from 'react';
import * as photos from '../../action/photos';

export default class Test extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h2> test page </h2>

        <button onClick={photos.fetchPhotos}>
          Click Me
        </button>
      </React.Fragment>
    );
  }
};

 