import React from 'react'
import {
    Route,
} from 'react-router-dom'
import ansycComponent from './components/AsyncComponent'

export default function StrongRoute({routerConfig,isSsr}){
    console.log('isSsr',isSsr)
    if(isSsr){
      
      const Com = routerConfig.componentServe
      // const Com = require(routerConfig.componentPath).default
      console.log(Com)
      return <Route path={routerConfig.path} render={() => <Com routers={routerConfig.childrens} isSsr={isSsr}/>}>
      </Route>
    }
    const Com = ansycComponent(routerConfig.component)
    return <Route path={routerConfig.path} render={() =><Com routers={routerConfig.childrens}/>}>
    </Route>
}