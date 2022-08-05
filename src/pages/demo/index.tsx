import React,{ Component } from 'react'
// import StrongRoute from '@src/strongRouter'
import {
  withRouter
} from 'react-router-dom'
// import './index.scss'


interface Point {
  readonly x: number
  readonly y?: number
}

function keepWholeObject(wholeObject: Point):boolean {
  let {  y = 1001 } = wholeObject
  return true
}

class Demo extends Component {
    state = {
      data:1
     
    }
  
    
    componentDidMount(){
      console.log(this.props)
      keepWholeObject({x:1})
    

    }
    render(){
      return <div>'Demo' {this.state.data} <div onClick={() => {
        this.setState((preState) =>({data: preState.data + 1}))
      }}>按钮</div></div>
    }
}
export default withRouter(Demo as any)


