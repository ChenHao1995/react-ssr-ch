import React, { Component } from 'react'
// import './index.scss'
export default class IOSKeyboard extends Component {
    state = {
        height:100
    }
  
    constructor(){
      super()
    }
    componentDidMount(){

    }
    inputFocus = () =>{
        this.setState({
            height:100
        })
    }
  

    render() {
      return <div><input onFocus={this.inputFocus}/> <span>{this.state.height}</span><div className="bottom-fixed">底部</div></div>


       
    }
}

