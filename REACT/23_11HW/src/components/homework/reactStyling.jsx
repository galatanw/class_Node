import React, { Component } from 'react'

export default class ChangeclrBtLng extends Component {
    render() {
        let color={color:this.props.text.length<=5 ?"red":"green"} 
        return (
            <div>
                <h2 style={color}>{this.props.text}</h2>
            </div>
        )
    }
}
