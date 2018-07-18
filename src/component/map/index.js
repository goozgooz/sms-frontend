import GoogleMapReact from 'google-map-react';

import React from 'react';
import Marker from './marker.js';

class Map extends React.Component {
  constructor(props){
    super(props);
  };
  
  render(){
    
    return(
      <div style={{height: '100%', width:'90%', border: '1px solid #A6A6A6'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: __GOOGLE_KEY__}}
          defaultCenter={{lat:47.6270856, lng:-122.1621511}}
          defaultZoom={13}
        >
          <Marker 
            lat={47.6270856}
            lng={-122.1621511}
          />
        </GoogleMapReact>
        

      </div>
        
    );
  }
}

export default Map;