import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react'

function Map({google}) {
   let mapStyle = {
      width: '800px',
      height: '600px'
   };

   let containerStyle = {
      width: mapStyle.width,
      height: mapStyle.height,
      position: 'relative'
   };

   return (
      <GoogleMap
      zoom={8}
      initialCenter={{ lat: 21, lng: -158 }}
      google={google}
      style={mapStyle}
      containerStyle={containerStyle}>

         <Marker lat={21} lng={-158} />

      </GoogleMap>
   );
}

export default GoogleApiWrapper({
   apiKey: process.env.GOOGLE_MAPS_API_KEY,
   LoadingContainer: ()=> <b>Loading...</b>
})(Map);