import './_car.scss';
import React from 'react';

import CarPhotos from './car-photo.js';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faArrowLeft, faCaretDown, faCaretUp} from '@fortawesome/fontawesome-free-solid';
fontawesome.config = { autoAddCss: false };

import * as _ from '../../lib/util.js';

class Car extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      displayAll: false,
    };
    
    this.handleCarClick = this.handleCarClick.bind(this);
  }
  
  handleCarClick(e){
    this.setState({
      displayAll: !this.state.displayAll, 
    });
  }
  
  render(){
    let {car, folders} = this.props;
    let {displayAll} = this.state;
    let folder = folders[car.folder];
 
    return(
      <React.Fragment>
        <h3>  {car.year} {car.make} {car.model} ${car.price} </h3>
        
        <CarPhotos folder={folder} displayAll={displayAll} />
        
        <div className='car-description'>
          <h3> {car.headline} </h3>
          <p> <span>Price: </span> ${car.price} </p>
          <p> <span>Miles: </span> {car.miles} </p>
          <p> <span>Exterior: </span> {car.exteriorColor} </p>
          <p> <span>Interior: </span> {car.interiorColor} </p>
          <p> <span>Transmission: </span> {car.transmission} </p>
          
          {_.renderIf(!displayAll, 
            <div className='down' onClick={this.handleCarClick}>
              <span> More </span>
              <FontAwesomeIcon icon={faCaretDown} className='icon down' /> 
            </div>
          )}
          

          {_.renderIf(displayAll,
            <React.Fragment>
              <p> <span>Drive: </span> {car.drive} </p>
              <p> <span>Title: </span> {car.titleStatus} </p>
              <p> <span>VIN: </span> {car.vin} </p>
              <p> <span>Car Description: </span>{car.description} </p>
              
              
              
              <div className='down' onClick={this.handleCarClick}>
                <FontAwesomeIcon icon={faCaretUp} className='icon down' /> 
                <span> Less </span>
              </div>
            </React.Fragment>
          )}
          
        </div>
        
      </React.Fragment>
    );
  }
};

export default Car;