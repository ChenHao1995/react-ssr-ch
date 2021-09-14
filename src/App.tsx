import React, { Component } from 'react'
import { withRouter } from 'react-router'
class App extends Component<{[key:string]:any}> {
    state = {
      show:1
    }
    constructor(){
      super()
    }
    componentDidMount(){

    }
    click = () => {
      console.log('--')
      this.setState((preState) =>{
        return {
          show:preState.show + 1
        }

      })
    }
    go = () => {
      console.log(this.props)
      this.props.history.push('/ios-keyboard')

    }

    render() {
      return <div>
        <a onClick={this.go}>跳转</a>
        <h1> <button onClick={this.click}>点击</button>{this.state.show}</h1>
      </div>
     


       
    }
}

export default withRouter(App)

