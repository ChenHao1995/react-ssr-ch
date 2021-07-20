import React, { Component } from 'react'

const ansycComponent = getcomponent =>
  class AnsycComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    componentDidMount() {
      getcomponent().then(component => {
        console.log(component.default)
        this.setState({
          component: component.default
        })
      })
    }

    render() {
      const ANSYC = this.state.component
      return this.state.component ? <ANSYC {...this.props} /> : null
    }
  }

export default ansycComponent
