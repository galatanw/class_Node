import React, { Component } from 'react'

export default class DisplayTxt extends Component {
    state={show:"block"}
    show=()=>this.setState({show:this.state.show==="block"?"none":"block"})

    render() {
        return (
            <div>
               <button onClick={this.show}>display:{this.state.show}</button> 
                <p style={{display:this.state.show}}>{this.props.text}</p>
            </div>
        )
    }
}
