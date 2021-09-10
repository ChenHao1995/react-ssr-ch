import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  MemoryRouter
} from 'react-router-dom'
import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import App from './App'

import routerConfig from './router-config'
import StrongRoute from './strongRouter'

const history = createBrowserHistory()
export default function Routers (){
  return (
    <MemoryRouter 
      initialEntries={['/zhihu-demo', '/zhihu-header']}
      initialIndex={1}
    >
      {/* <App/> */}
      <Switch>
        {routerConfig.map((r) => <StrongRoute {...r}/>)}
      </Switch>
    </MemoryRouter>)
}