import {Component} from 'react';

class Counter extends Component {   
state={counter:0}

counterInc=()=>{
    this.setState({counter:this.state.counter+1})
}

counterDec=()=>{
    this.setState({ counter:this.state.counter-1})
}      
    render(){ 
        console.log("rendered");
return (
    <div id="counter">
    <button onClick={this.counterInc}>increment</button>
    <button onClick={this.counterDec}>decrement</button>
    <p id="par">count is on:{this.state.counter}  </p>
    </div>
)}
}
 
export default Counter;