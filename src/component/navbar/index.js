import React from 'react';
import Mobile from './mobile.js';
import Desktop from './desktop.js';

import MediaQuery from 'react-responsive';

class MyNavbar extends React.Component {

  render(){
    return(
      <React.Fragment>
        <MediaQuery minDeviceWidth={768}>
          <Desktop />
        </MediaQuery>
        
        <MediaQuery maxDeviceWidth={768}>
          <Mobile />
        </MediaQuery>
        
      </React.Fragment>
    );
  }
}

export default MyNavbar;

