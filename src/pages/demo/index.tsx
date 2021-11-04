import { Component } from 'react'
import StrongRoute from '@src/strongRouter'
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
     
    }
  
    
    componentDidMount(){
      console.log(this.props)
      keepWholeObject({x:1})
    

    }
    render(){
      return 'Demo'
    }
}
export default withRouter(Demo as any)

