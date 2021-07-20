import {
    StaticRouter,
  } from 'react-router-dom'
import React, { Component } from 'react'
import App from './App'
import RoutersCommon from './routers-common'

export default function Routers (props){
  return (<StaticRouter location={props.url} context={props.context}>
    <RoutersCommon/>
  </StaticRouter>)
}