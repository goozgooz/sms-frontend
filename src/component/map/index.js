import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

import React from 'react';

class MapContainer extends React.Component {
  render(){
    const style = {
      width: '100%',
      height: '100%',
    };
    
    return(
      <Map 
        google={this.props.google} 
        initialCenter={{lat:47.6270856, lng:-122.1621511}}
        style={style}
        zoom={14}
      />  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U',
})(MapContainer);


     
     
// AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U