import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import IOSKeyboard from './pages/iosKeyboard'

export default class App extends Component {
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

    render() {
      return <Router>
      <div>
        <h1> <button onClick={this.click}>点击</button>{this.state.show}</h1>
        <Switch>
          <Route path="/ios-keyboard">
            <IOSKeyboard />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
        
        </Switch>
      </div>
      </Router>


       
    }
}

