import style from '../style/anime2.module.css'
import anime from 'animejs'
import { useEffect } from 'react'

 export default function Anime2() {
   useEffect(() => {
      let boxPath = anime.path('svg path');

      anime({
         targets: '#box',
         translateX: 69.7638,
         translateY: 11.331839,
         opacity: 1,
         duration: 0,
      });

      anime({
         targets: '#box',
         translateX: boxPath('x'),
         translateY: boxPath('y'),
         rotate: boxPath('angle'),
         duration: 6000,
         easing: 'linear',
         loop: true
      });
   })

   return (
      <div className={style.parent}>

         <svg className={style.path}>
            <path d="m 570.09029,199.19958 c 45.8701,-9.76324 100.47014,-44.09567 100.46999,-98.48991 -8e-5,-54.39421 -54.6,-88.726191 -100.46999,-98.489429 C 385.83514,-36.99712 224.6373,238.41694 40.382203,199.19958 -5.4879278,189.43634 -60.087981,155.10391 -60.087879,100.70967 -60.087838,46.31546 -5.487822,11.983479 40.382203,2.220241 224.63735,-36.99712 385.83519,238.41694 570.09029,199.19958 Z" stroke="black" stroke-width= "1px" fill="none" transform="translate(69.7638,11.331839)"/>
         </svg>

         <div id="box" className={style.box}></div>

      </div>
   )
 }