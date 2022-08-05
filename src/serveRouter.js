import React from 'react'
import {
  Route,
} from 'react-router-dom'
import ansycComponent from './components/AsyncComponent'

export default function serveRouter({path,routes,component,serveData,isSsr,isLazy}) {
  let Com = component

  console.log('服务端路由匹配的Component',Com)

  if(isLazy){
    Com = ansycComponent(component)
  }

 
  return <Route 
    path={path}
    render={
      (props) => 
        <Com 
          {...props}
          routers={routes} 
          isSsr={isSsr}
          serveData={isSsr ? serveData : JSON.parse(document.getElementById('__pre-server-data').innerHTML)}
        />
    }
  >
  </Route>
}