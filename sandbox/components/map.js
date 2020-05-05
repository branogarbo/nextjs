import MapGL, { NavigationControl } from 'react-map-gl';
import { useState } from 'react'

let navStyle = {
   position:'absolute',
   top:0,
   left:0,
   padding:'10px'
}

export default function Map() {
   let [state,setState] = useState({
      viewport: {
         width: '800px',
         height: '600px',
         latitiude: 21.5,
         longitude: -158,
         zoom: 3,
         bearing:0,
         pitch:0
      }
   });

   return (
      <MapGL 
         mapStyle="mapbox://styles/branomap/ck9rqnqqz0d5e1im9s3xm1k9a" 
         mapboxApiAccessToken="pk.eyJ1IjoiYnJhbm9tYXAiLCJhIjoiY2s5cm9pZ3k0MG00ZDNlbXIxdXNreW4wdCJ9.DjmMyAvuhgUqszReI1LR9w" 
         onViewportChange={viewport => setState({viewport})} 
         {...state.viewport}>

         <div style={navStyle}>
            <NavigationControl />
         </div>
      </MapGL>
   );
}