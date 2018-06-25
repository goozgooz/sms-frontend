import React from 'react';
import Mobile from './mobile.js';

import {withBreakpoints} from 'react-breakpoints';

class MyNavbar extends React.Component {

  render(){
    const {breakpoints, currentBreakpoint} = this.props;
    console.log({breakpoints}, {currentBreakpoint});
    return(
      <Mobile />
    );
  }
}

export default withBreakpoints(MyNavbar);

