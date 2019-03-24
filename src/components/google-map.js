import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

export class MapContainer extends React.Component {

  state = {
  };

  onMapClicked = (props) => {
  };
  render() {
    const style = {
  width: '50%',
  height: '50%'
}
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <Map google={this.props.google} initialCenter={{
            lat: 51.504831314 ,
            lng: -0.123499506
          }}zoom={10} zoomControl={false} gestureHandling='none'>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCAzvMKXYqfaZg2vIPcNPPcyZ9iclq_WFE')
})(MapContainer)