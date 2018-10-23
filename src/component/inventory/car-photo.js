import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

class CarPhotos extends React.Component{
  constructor(props){
    super(props);
    
    this.imageCarousel = this.imageCarousel.bind(this);
  }
  
  imageCarousel(images) {
    images.map((url, i) => {
      if(i === 0) {
        return (
          <div>
            <img src={url.main} />
          </div>
        );
      }
    });
  }
  
  render(){
    let {images} = this.props.folder;
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return(
      <Slider {...settings} className='photo-carousel'>
        {this.imageCarousel(images)}
      </Slider>
    );
  }
}

export default CarPhotos;
