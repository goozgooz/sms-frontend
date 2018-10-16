import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

class CarPhotos extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return(
      <Slider {...settings} className='photo-carousel'>
        <div>
          <img src={require('./dev-car.jpg')} />
        </div>
        <div>
          <img src={require('./dev-car.jpg')} />
        </div>
      </Slider>
    );
  }
}

export default CarPhotos;
