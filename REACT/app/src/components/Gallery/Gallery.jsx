import { Component } from 'react'
import * as styles from "./Gallery.module.css"
export default class Gallery extends Component {
    state = { main: "https://cdn.pixabay.com/photo/2021/11/20/13/30/sea-6811812__340.jpg", options: ["https://cdn.pixabay.com/photo/2021/09/17/12/07/bird-of-paradise-flower-6632515__340.jpg", "https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607__340.jpg", "https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430__340.jpg"] }
    mainImgSwitch = (e) => {
        const pic = e.target
        const index = Number(pic.id)
        const pics = [...this.state.options]
        const main = this.state.main
        pics[index] = main
        this.setState({ main: pic.src })
        this.setState({ options: pics })
    }
    render() {
        const pics = []
        {
            this.state.options.map((image, i) => {
                return pics.push(
                    <img key={i} onClick={this.mainImgSwitch} id={i} src={image} alt="" />
                )
            })
        }
        return (
            <div>
                <article className={styles.main}>
                    <img src={this.state.main} alt="" />
                </article>
                <article className={styles.options}>
                    {pics}
                </article>
            </div>
        )
    }
}
