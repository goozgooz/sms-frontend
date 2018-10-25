import './_car.scss';
import React from 'react';

import CarPhotos from './car-photo.js';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faArrowLeft, faCaretDown, faAarowUp} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

import * as _ from '../../lib/util.js';

class Car extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {car, displayFull, back, folders} = this.props;
    let folder = folders[car.folder];
 
    return(
      <React.Fragment>
        {_.renderIf(displayFull,
          <div onClick={back} className='back-button'> 
            <FontAwesomeIcon icon={faArrowLeft} className='icon' /> 
          </div>
        )}
            
        <h3>  {car.year} {car.make} {car.model} ${car.price} </h3>
        
        <CarPhotos folder={folder} displayAll={displayFull} />
        
        <div className='car-description'>
          <h3> {car.headline} </h3>
          <p> <span>Price: </span> ${car.price} </p>
          <p> <span>Miles: </span> {car.miles} </p>
          <p> <span>Exterior: </span> {car.exteriorColor} </p>
          <p> <span>Interior: </span> {car.interiorColor} </p>
          <p> <span>Transmission: </span> {car.transmission} </p>
          <div className='down'>
            <span> More </span>
            <FontAwesomeIcon icon={faCaretDown} className='icon down' /> 
          </div>

          {_.renderIf(displayFull,
            <React.Fragment>
              <p> <span>Drive: </span> {car.drive} </p>
              <p> <span>Title: </span> {car.titleStatus} </p>
              <p> <span>VIN: </span> {car.vin} </p>
              <p> <span>Car Description: </span>{car.description} </p>
            </React.Fragment>
          )}
          
        </div>
        
      </React.Fragment>
    );
  }
};

export default Car;