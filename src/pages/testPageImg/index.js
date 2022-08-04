import React, { Component } from 'react'
// import './index.scss'
export default class TestPageImg extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
  }
  render() {
    return <div>TestPageImg<img src={require('@src/images/zxw.jpg').default}/></div>
  }
}

