import './_banner.scss';

import React from 'react';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

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
          <MediaQuery maxDeviceWidth={768}>
            <Slider {...settings}>

              <div>
                <img src={require('./assets/bmw.jpg')} />
              </div>
    
              <div>
                <img src={require('./assets/x5.jpg')} />
              </div>
            </Slider>
          </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
          <Slider {...settings}>
            <div>
              <img src={require('./assets/bmw-desktop.jpg')} />
            </div>

            {/* <div>
              <img src={require('./assets/x5.jpg')} />
            </div> */}
          </Slider>
        </MediaQuery>
  
      </div>
    );
  }
}

export default Banner;