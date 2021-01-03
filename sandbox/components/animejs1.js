import anime from 'animejs'
import { useEffect, useRef } from 'react'
import style from '../style/anime1.module.css'

export default function Anime1() {
   let ball = useRef(null);
   
   useEffect(() => {
      anime({
         targets: '#ball',
         opacity: 1,
         translateX: window.innerWidth/2 - 40,
         translateY: window.innerHeight/2 - 40,
         duration: 0
      });
   });

   function clickAnim(event) {
      anime({
         targets: '#ball',
         translateX: event.clientX - 40,
         translateY: event.clientY - 40,
         scale: Math.random()*1.75 + 0.25,
         borderRadius: Math.random()*51 + '%',
         backgroundColor: `hsla(${Math.floor(Math.random()*256)},100%,50%,${Math.random()})`,
         rotate: Math.random()*362-181 + 'deg',
         duration: 1000
      });
   }

   return (
      <div className={style.parent} onMouseDown={event => clickAnim(event)}>
         <div id="ball" ref={ball} className={style.ball}></div>
      </div>
   )
}