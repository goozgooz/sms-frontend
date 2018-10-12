import './_car.scss';
import React from 'react';

class Car extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {car} = this.props;
 
    return(
      <React.Fragment>
        <h3>  {car.year} {car.make} {car.model} - ${car.price} </h3>
        <img src={require('./dev-car.jpg')} />
        <p> {car.headline} </p>
        <hr />
        <p> {car.exteriorColor} Exterior - {car.interiorColor} Interior </p>
        <p> {car.miles} Miles - {car.transmission} Transmission </p>
        <p> VIN: {car.vin} </p>
      </React.Fragment>
    );
  }
};

export default Car;