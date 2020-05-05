import Router from 'next/router'
import { useEffect } from 'react'
import Home from './home'

export default function IndexPage() {
  useEffect(()=> Router.replace('/','/home', { shallow:true }));

  return <Home />;
}