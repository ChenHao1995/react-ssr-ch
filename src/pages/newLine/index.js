
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function (props) {
  console.log(props)
  const {match: {
    params: {id}
  }} = props
  return <div>newLine  {id}</div>
})