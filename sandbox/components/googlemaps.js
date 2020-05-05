import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

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
      google={google}
      zoom={8}
      style={mapStyle}
      containerStyle={containerStyle}
      initialCenter={{ lat: 21, lng: -158 }}
      >

      </GoogleMap>
   );
}

export default GoogleApiWrapper({
   apiKey:'AIzaSyAGbGP7TgyCeE_swPMkR51_eI8buznd5bc',
   LoadingContainer: ()=> <b>Loading...</b>
})(Map);