import React from 'react'
import {
  Route,
} from 'react-router-dom'
import ansycComponent from './components/AsyncComponent'

export default function StrongRoute({isSsr,componentServe,path,childrens,component}){
  console.log('isSsr',isSsr)
  if(isSsr){
    const Com = componentServe
    // const Com = require(routerConfig.componentPath).default
    console.log(Com)
    return <Route path={path} render={() => <Com routers={childrens} isSsr={isSsr}/>}>
    </Route>
  }
  const Com = ansycComponent(component)
  return <Route path={path} render={() =><Com routers={childrens}/>}>
  </Route>
}