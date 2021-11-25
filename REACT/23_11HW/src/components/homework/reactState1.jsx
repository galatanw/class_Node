import  { Component } from 'react'

export default class Counter extends Component {
  state={counter:0}
  count=()=>{
      this.setState({counter:this.state.counter+1})
  }
    render() {
        return (
            <div>
                <button onClick={this.count}>increment</button>
                <p>count:{this.state.counter}</p>
            </div>
        )
    }
}
