import React, { Component } from 'react'
import { withRouter } from 'react-router'
class App extends Component {
    state = {
      show:1
    }
    constructor(){
      super()
    }
    componentDidMount(){

    }
   
    go = () => {
      this.props.history.push('/zhihu-header')

    }

    render() {
      return <div>
        <a onClick={this.go}>跳转zhihu-header</a>
      </div>
     


       
    }
}

export default withRouter(App)

