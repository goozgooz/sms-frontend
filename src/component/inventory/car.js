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
    console.log(displayFull);
 
    return(
      <React.Fragment>
        {_.renderIf(displayFull,
          <React.Fragment>
            <div onClick={back} className='back-button'> 
              <FontAwesomeIcon icon={faArrowLeft} className='icon' /> 
            </div>
            
            <h3>  {car.year} {car.make} {car.model} ${car.price} </h3>
            <img src={require('./dev-car.jpg')} />
            <p> {car.headline} </p>
            <hr />
            <p> {car.exteriorColor} Exterior - {car.interiorColor} Interior </p>
            <p> {car.miles} Miles - {car.transmission} Transmission </p>
            <p> VIN: {car.vin} </p>
          </React.Fragment>
          
          ,
          
          <React.Fragment>
            <h3>  {car.year} {car.make} {car.model} ${car.price} </h3>
            <img src={require('./dev-car.jpg')} />
            <p> {car.headline} </p>
            <hr />
            <p> {car.exteriorColor} Exterior - {car.interiorColor} Interior </p>
            <p> {car.miles} Miles - {car.transmission} Transmission </p>
            <p> VIN: {car.vin} </p>
          </React.Fragment>
          
        )}

        
      </React.Fragment>
    );
  }
};

export default Car;