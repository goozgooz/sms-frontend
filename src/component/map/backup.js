import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

import React from 'react';

class MapContainer extends React.Component {
  constructor(props){
    super(props);
  };
  

  
  render(){
    const style = {
      display: 'block',
      width: '95%',
      height: '30%',
    };
    
    
    return(
      <Map 
        google={this.props.google} 
        initialCenter={{lat:47.6270856, lng:-122.1621511}}
        zoom={13}
        style={style}>
        
        <Marker
          name={'Source Motor Sales'}
          position={{lat:47.6270856, lng:-122.1621511}}
        />
        
      </Map>  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U',
})(MapContainer);


     
     
// AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U