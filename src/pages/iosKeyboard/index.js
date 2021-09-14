import React, { Component } from 'react'
import StrongRoute from '@src/strongRouter'
// import './index.scss'
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
      return <div>
        <input onFocus={this.inputFocus}/> <span>{this.state.height}</span><div className="bottom-fixed">底部</div>
        {this.props.routers.map((r) =><StrongRoute {...r} isSsr={!!this.props.isSsr}/>)}
      </div> 
    }
}

