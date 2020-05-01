import Link from 'next/link'
import style from '../style/template.module.css'

export default (props) => {
   return (
      <div className="container">
         <h1>{props.title}</h1>

         {props.children}

         <Link href="/"><a className={style.backToHome}><img className={style.BTHarrow} src="/left-arrow.svg" /> Back to Home</a></Link>
      </div>
   )
}