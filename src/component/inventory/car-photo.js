import './_car.scss';
import React from 'react';
import Slider from 'react-slick';

class CarPhotos extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    let {images} = this.props.folder;
    console.log(images);
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
            <a href='https://dl.dropboxusercontent.com/apitl/1/AAA9TUrWalD_A9juCjhCziFUf317AlBb_BnjXeQpyTlIDsIRB8nnAmsiH-XeAyAvHd4hZ3B3-yTNnYxrzWV30zKTmAVL97MdeiEIK4d8xWz1QvqIPWtqPSpeh32eC2d7lBFQBV8lCNdPvl_YYKRRypvKA7U9QkSdaQR3lA4mXRJFsMj49KoKatXl_MDhgLX4WwFX5jjeUlAgoUy9WS53Q3lec5z0u2F2lM-plwYoUwxO6hSsAOGEme3rpWgdasmaFiAHnuS8OYSYdTpAXmKE8gxmcVE0LX74l0SZdq9OKaMAKFRBuNJ19fxeBnXRI14QMmymzpcrdyFXkLA-mTfBg_DaRfn67mNnFQq1NBOit4RWhA' />
          </div>
        )})}
      </Slider>
    );
  }
}

export default CarPhotos;
