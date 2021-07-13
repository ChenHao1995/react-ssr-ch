import React, { Component } from 'react';

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
        return <h1> <button onClick={this.click}>点击</button>{this.state.show}</h1>
    }
}

