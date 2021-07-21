import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom'
import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import App from './App'
import ansycComponent from './components/AsyncComponent'
import routerConfig from './router-config'

const history = createBrowserHistory();
export default function Routers (){
  return (<Router history={history}>
   <App/>
    <Switch>
      <Route path="/ios-keyboard" component={ansycComponent(() => import('./pages/iosKeyboard'))}>
      </Route>
      {/* <Route path="/users">
        <Users />
      </Route> */}
    </Switch>
  </Router>)
}