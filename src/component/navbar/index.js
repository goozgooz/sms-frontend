import React from 'react';
import Mobile from './mobile.js';
import Desktop from './desktop.js';

import {withBreakpoints} from 'react-breakpoints';

class MyNavbar extends React.Component {

  render(){
    const {breakpoints, currentBreakpoint} = this.props;
    // console.log(breakpoints[currentBreakpoint]);
    return(
      <React.Fragment>
        {breakpoints[currentBreakpoint] > breakpoints.tablet ? (
          <Desktop />
        ) : (
          <Mobile />
        )}
      </React.Fragment>
    );
  }
}

export default withBreakpoints(MyNavbar);

