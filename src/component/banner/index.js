import './_banner.scss';

import React from 'react';
import Slider from 'react-slick';

class Banner extends React.Component {
  render(){
    let settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    
    return(
      <div className='banner'>
        <Slider {...settings}>
        
          <div>
            <img src={require('./assets/bmw-desktop.jpg')} />
          </div>
  
          <div>
            <img src={require('./assets/audi.jpg')} />
          </div>
          
          <div>
            <img src={require('./assets/bmw-suv.jpg')} />
          </div>
  
        </Slider>
      </div>
    );
  }
}

export default Banner;