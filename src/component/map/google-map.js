import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './marker.js';

const GoogleMap = () => {
  return(
    <div style={{height: '100%', width:'100%'}}>
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
};

export default GoogleMap;