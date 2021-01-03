import Anime1 from '../../components/animejs1'
import Anime2 from '../../components/animejs2'
import Template from '../../components/template'
import { useState } from 'react'

export default () => {
   let [ demoEl, setDemoEl ] = useState(<Anime1 />);

   return (
      <Template title="anime.js demos">
         { demoEl.type.name == "Anime1" ? 
         <a style={{ cursor: 'pointer' }} onClick={() => setDemoEl(<Anime2 />)}>Go to animejs demo 2</a> : 
         <a style={{ cursor: 'pointer' }} onClick={() => setDemoEl(<Anime1 />)}>Go to animejs demo 1</a> }

         {demoEl}
      </Template>
   );
}