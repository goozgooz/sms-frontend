import './_car.scss';
import React from 'react';

class Car extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    console.log('hi');
    return(
      <div className='car-item'>
        <h2> This is a car </h2>
      </div>
    );
  }
};

export default Car;