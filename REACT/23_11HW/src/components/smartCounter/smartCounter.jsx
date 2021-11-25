import {Component} from 'react';
class SmartCounter extends Component {   
state={counter:this.props.counter}

counterInc=()=>{
    this.setState({counter:this.state.counter+1})
}

counterDec=()=>{
    this.setState({ counter:this.state.counter-1})
}      
    render(){ 
        console.log(this.props);
return (
    <div id="counter">
    <button onClick={this.counterInc}>increment</button>
    <button onClick={this.counterDec}>decrement</button>
    <p id="par">count is on:{this.state.counter}  </p>
    </div>
)}
}
 
export default SmartCounter;