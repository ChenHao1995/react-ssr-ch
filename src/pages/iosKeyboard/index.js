import React, { Component } from 'react'
import StrongRoute from '@src/strongRouter'
import ServeRouter from '@src/serveRouter'
import './index.scss'
export default class IOSKeyboard extends Component {
    state = {
      height:100
    }
  
    constructor(){
      super()
    }
    componentDidMount(){
      console.log(this.props)

    }
    inputFocus = () =>{
      this.setState({
        height:100
      })
    }
  

    render() {
      console.log('this.props.routers', this.props.routers)
      return <div>
        <div>这是一个从服务端返回的随机数: {this.props.serveData.data}</div>
        <input onFocus={this.inputFocus}/> <span>{this.state.height}</span><div className="bottom-fixed">底部</div>
        {this.props.routers.map((r) => <ServeRouter {...r} isSsr={!!this.props.isSsr}/>)}
      </div> 
    }
}

IOSKeyboard.getServeData = async function () {
  const serveData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({data:(Math.random() * 100).toFixed(2)})
    }, 100)
  })
  return serveData
}

