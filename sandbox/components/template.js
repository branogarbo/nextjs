import Link from 'next/link'
import style from '../style/template.module.css'

export default function Template(props) {
   return (
      <div className={style.container}>
         <h1>{props.title}</h1>

         {props.children}

         <Link href="/home">
            <a className={style.backToHome}>
               <img className={style.BTHarrow} src="/left-arrow.svg" /> Back to Home
            </a>
         </Link>
      </div>
   )
}