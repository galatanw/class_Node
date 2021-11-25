import React, { Component } from 'react'
import "./car.css"
export default class Car extends Component {
    render() {
        const carObj=this.props.car
        return (
            <div>
                <h1>{carObj.model}</h1>
                <h4>{carObj.price}</h4>
                <img src={carObj.img} alt="" />
            </div>
        )
    }
}
