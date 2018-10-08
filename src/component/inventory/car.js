import './_car.scss';
import React from 'react';

class Car extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {car} =  this.props;
    
    return(
      <div className='car-item'>
        <img src={require('./dev-car.jpg')} />
        <h2> {car.headline} </h2>
      </div>
    );
  }
};

export default Car;