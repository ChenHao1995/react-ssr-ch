import React, { Component } from 'react'
import ZhihuSVG from '../../svg/zhihuIcon'
import App from '../../App'
import './index.scss'

export default class ZhihuDemo extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
  }
  render() {
    return (
      <div> 
        <ZhihuSVG/>
        <h1>ZhihuDemo</h1> 
        <App/>
      </div>)
  }
}

