import Router from 'next/router'
import { useEffect } from 'react'
import Home from './home'

export default function IndexPage() {
  useEffect(()=> Router.push('/','/home', { shallow:true }), []);

  return <Home />;
}