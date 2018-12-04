import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

class CarPhotos extends React.Component{
  constructor(props){
    super(props);
    
  }
  
  render(){
    let {displayAll, sold} = this.props;
    let {images} = this.props.folder;

    const carPhotos = images.map((url,i) => {
      if(i === 0) {
        return <div key={i}> <img src={url.main} /> </div>
      }
      // if(i > 0 && displayAll) {
      if(i > 0) {
        return <div key={i}> <img src={url.images} /> </div>
      }
    })
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return(
      <React.Fragment>
        <Slider {...settings} className='photo-carousel'>
          {carPhotos}
        </Slider>
      </React.Fragment>
    );
  }
}

export default CarPhotos;
