import {
    StaticRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import React, { Component } from 'react'
// import IOSKeyboard from './pages/iosKeyboard'
import App from './App'

// 可用 react-loadable代替
import ansycComponent from './components/AsyncComponent'

export default function RoutersCommon (props){
  return (<div>
    <App/>
    <Switch>
      <Route path="/ios-keyboard" component={ansycComponent(() => import('./pages/iosKeyboard'))}>
      </Route>
      {/* <Route path="/users">
        <Users />
      </Route> */}
    </Switch>
    </div>)
  
 
}