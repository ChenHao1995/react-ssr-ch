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
import serveRouterConfig from './serve-router-config'
import ServeRouter from './serveRouter'

const history = createBrowserHistory()
export default function Routers (){
  // @ts-ignore
  return (<Router history={history}>
    <App/>
    <Switch>
      {serveRouterConfig.map((r) => <ServeRouter {...r}/>)}
    </Switch>
  </Router>)
}