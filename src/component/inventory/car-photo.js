import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

const CarPhotos = (props) => {
  let {displayAll, sold} = props;
  let {images} = props.folder;

  const carPhotos = images.map((url,i) => {
    if(i === 0) {
      return <div key={i}> <img src={url.main} /> </div>
    }
    if(i > 0) {
      return <div key={i}> <img src={url.images} /> </div>
    }
  });
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <Slider {...settings} className='photo-carousel'>
        {carPhotos}
      </Slider>
    </React.Fragment>
  );
};
  

export default CarPhotos;
