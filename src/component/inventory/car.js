import './_car.scss';
import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

import * as _ from '../../lib/util.js';

class Car extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {car, displayFull, back} = this.props;
 
    return(
      <React.Fragment>
        {_.renderIf(displayFull,
          <div onClick={back} className='back-button'> 
            <FontAwesomeIcon icon={faArrowLeft} className='icon' /> 
          </div>
        )}
            
        <h3>  {car.year} {car.make} {car.model} ${car.price} </h3>
        <img src={require('./dev-car.jpg')} />
        
        <div className='car-description'>
          <p> {car.headline} </p>
          <p> <span>Price: </span> ${car.price} </p>
          <p> <span>Miles: </span> {car.miles} </p>
          <p> <span>Exterior: </span> {car.exteriorColor} </p>
          <p> <span>Interior: </span> {car.interiorColor} </p>
          <p> <span>Transmission: </span> {car.transmission} </p>
          <p> <span>Drive: </span> {car.drive} </p>
          <p> <span>Title: </span> {car.title} </p>
          <p> <span>VIN: </span> {car.vin} </p>
        </div>
        
      </React.Fragment>
    );
  }
};

export default Car;