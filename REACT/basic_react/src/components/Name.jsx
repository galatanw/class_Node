import React, { Component } from 'react'

export default class Name extends Component {
    state={name:"Gal"}
    displayTxt=(e)=>{this.setState({name:e.target.value})}
    render() {
        return (
            <div>
                <input type="text" onChange={this.displayTxt} />
                <p>{this.state.name}</p>
            </div>
        )
    }
}
