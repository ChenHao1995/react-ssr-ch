import React, { Component } from 'react'
import StrongRoute from '@src/strongRouter'
import ServeRouter from '@src/serveRouter'
import './index.scss'
export default class IOSKeyboard extends Component {
    state = {
      height:100,
      data: {}
      
    }
  
    constructor(props){
      super(props)
      console.log(props)
      // 降级渲染
      if(!props.serveData.data) {
        console.log('正在客户端请求')
        IOSKeyboard.getServeData().then((data) =>{
          console.log('客户端请求返回')
          console.log(data)
          this.setState({
            data
          })
        })
      } else {
        this.state.data = props.serveData
        // this.setState({
        //   data: props.serveData
        // })
      }
    }
    componentWillMount(){
      console.log('--componentWillMount--')
    }

    componentDidMount(){
      console.log(this.props)
      console.log('--componentDidMount--')
    }

    inputFocus = () =>{
      this.setState({
        height:100
      })
    }
  

    render() {
      console.log('this.props.routers', this.props.routers)
      return <div>
        <div>这是一个从服务端返回的随机数: {this.state.data.data}</div>
        <input onFocus={this.inputFocus}/> <span>{this.state.height}</span><div className="bottom-fixed">底部</div>
        {this.props.routers.map((r) => <ServeRouter {...r} isSsr={!!this.props.isSsr}/>)}
      </div> 
    }
}

IOSKeyboard.getServeData = async function () {
  const serveData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({data:(Math.random() * 100).toFixed(2)})
    }, 1000)
  })
  return serveData
}

