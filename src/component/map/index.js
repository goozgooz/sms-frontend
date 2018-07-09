import GoogleMapReact from 'google-map-react';

import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
  };
  
  render(){
    
    return(
      <div style={{height: '200px', width:'100%', border: '1px solid #A6A6A6'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U'}}
          defaultCenter={{lat:47.6270856, lng:-122.1621511}}
          defaultZoom={11}
        />
      </div>
        
    );
  }
}

export default Map;
     
     
// AIzaSyCHsCYLeGX6VmvyGSvRZk7Syo1VWg5Gf2U