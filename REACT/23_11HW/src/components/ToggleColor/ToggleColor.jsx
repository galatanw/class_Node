import { Component } from "react"

class ToggleColor extends Component{
state={colorTest:"red"}
colorSwap=()=> this.setState({colorTest:this.state.colorTest==="red" ? "green":"red"})        

render(){
    let colorChange={color:this.state.colorTest}
    return<p style={colorChange} onClick={this.colorSwap}>{this.props.text}</p>
}
}
export default ToggleColor