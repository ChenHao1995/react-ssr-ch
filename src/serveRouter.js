import React from 'react'
import {
  Route,
} from 'react-router-dom'

export default function serveRouter({path,routes,component,serveData,isSsr}) {
  const Com = component
  console.log('Com',Com)
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