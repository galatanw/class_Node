import React, { Component } from 'react'
import * as carStyle from"./car.module.css"
export default class Car extends Component {
    render() {
        const carObj=this.props.car
        return (
            <div className={carStyle.card}>
                <h1>name:{carObj.name}</h1>
                <h4>price:{carObj.number}</h4>
                <img src={carObj.img} alt="" />
                <article></article>
            </div>
        )
    }
}
