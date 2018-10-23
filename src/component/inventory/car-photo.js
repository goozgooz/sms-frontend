import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

class CarPhotos extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    let {images} = this.props.folder;
    // console.log(images);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
        // <div>
        //   <img src={require('./dev-car.jpg')} />
        // </div>
    
    return(
      <Slider {...settings} className='photo-carousel'>
        {images.map((url, i) => {(
          <div>
            <a href={url} />
          </div>
        )})}
      </Slider>
    );
  }
}

export default CarPhotos;
