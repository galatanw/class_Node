import  { Component } from 'react'
import * as movieStyle from"./movie.module.css"

export default class Movie extends Component {
    render() {
        const movieObj=this.props.movie
        return (
            <div className={movieStyle.card}>
                <h1>name:{movieObj.name}</h1>
                <h4>year:{movieObj.number}</h4>
                <img src={movieObj.img} alt="" />
            </div>
        )
    }
}
