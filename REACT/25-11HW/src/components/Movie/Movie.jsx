import { Component } from 'react'
import * as styles from "./movie.module.css"

export default class Movie extends Component {

    render() {
    const movie=this.props.movie
    const key=this.props.key
            return (
            <div className={styles.card}>
                <section>
                    <h1>{movie.title}</h1>
                    <h4>{movie.year}</h4>
                    <p>{movie.description}</p>
                </section>
                <section>
                    <video muted loop autoPlay src={movie.trailer}  style={{ height: "300px", width: "300px" }}></video>
                </section>
            </div>
        )
    }
}
