import React, { Component } from 'react'
import ZhihuSVG from '../../svg/zhihuIcon'
import './index.scss'

export default class ZhihuDemo extends Component {
  constructor(){
    super()
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="header"> 
        <ZhihuSVG/>
      </div>)
  }
}

