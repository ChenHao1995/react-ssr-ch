import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import React, { Component } from 'react'
import RoutersCommon from './routers-common'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default function Routers (){
  return (<Router history={history}>
   <RoutersCommon></RoutersCommon>
  </Router>)
}