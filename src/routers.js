import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import App from './App'

import routerConfig from './router-config'
import StrongRoute from './strongRouter'

const history = createBrowserHistory()
export default function Routers (){
  // @ts-ignore
  return (<Router history={history}>
    <App/>
    <Switch>
      {routerConfig.map((r) => <StrongRoute {...r}/>)}
    </Switch>
  </Router>)
}