import './_construction.scss';

import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

let Construction = () => {
  return (
    <div className='construction'>
      <Navbar />
      <h4 className='construction-text'> This Page is Under Construction </h4>
      <Footer className='footer' />
    </div>
  );
};

export default Construction;