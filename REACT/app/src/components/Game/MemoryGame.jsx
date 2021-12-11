import React, { Component } from 'react'
import * as styles from "./game.module.css"
export default class MemoryGame extends Component {
    state = {
        cards: this.props.cards, time: { hours: 0, minutes: 0, secondes: 0 }, pause:false, gameover:false
    }
    lastCliked = null
    flipped = false;
    gameEndCounter = 0
    triesCount = 0
    timer;
    timing=()=>{
        this.timer = setInterval(() => {
            const time = {
                hours: this.state.time.hours
                , minutes: this.state.time.minutes,
                secondes: this.state.time.secondes + 1
            }
            if (time.secondes === 60) {
                time.secondes = 0
                time.minutes += 1
                if (time.minutes === 60) {
                    time.minutes = 0
                    time.hours += 1
                }
            }
            this.setState({ time: time })
        }
            , 1000)

    }
    componentDidMount() {
        this.timing()
        const array = [...this.state.cards]
        const arraysecond = [...this.state.cards]
        const length = this.state.cards.length
        const shuffledArray = []
        for (let index = 0; index < length; index++) {
            const first = Math.floor(Math.random() * (Number(array.length)))
            const second = Math.floor(Math.random() * (Number(arraysecond.length)))
            shuffledArray.push({ value: array[first], revealed: false, found: false })
            shuffledArray.unshift({ value: arraysecond[second], revealed: false, found: false })
            array.splice(first, 1)
            arraysecond.splice(second, 1)
        }
        this.setState({ cards: shuffledArray })
    }
    tryCard = (e) => {
        if (Number(e.currentTarget.id) === this.lastCliked || this.flipped === true || this.state.cards[Number(e.target.id)].found === true) return
        const temp = [...this.state.cards]
        if (this.lastCliked != null) {
            this.triesCount++
            const lastVal = this.lastCliked
            if (this.state.cards[e.target.id].value === this.state.cards[this.lastCliked].value) {
                this.gameEndCounter++
                temp[Number(e.target.id)].revealed = true
                temp[Number(this.lastCliked)].revealed = true
                this.lastCliked = null
                if (this.gameEndCounter === temp.length / 2) {
                    temp[Number(e.target.id)].found = true
                    temp[lastVal].found = true
                    clearInterval(this.timer)
                    return this.setState({
                        gameover: true,
                        cards: temp
                    })
                }
                this.setState({ cards: temp })
                setTimeout(() => {
                    temp[Number(e.target.id)].found = true
                    temp[lastVal].found = true
                    this.setState({ cards: temp })
                }, 1000)
                return
            }
            this.flipped = true
            temp[Number(e.target.id)].revealed = true
            this.setState({ cards: temp })
            this.lastCliked = null;
            setTimeout(() => {
                this.flipped = false
                temp[Number(e.target.id)].revealed = false
                temp[lastVal].revealed = false
                this.setState({ cards: temp })
            }, 2000)



        }
        else {
            this.flipped = false
            temp[Number(e.currentTarget.id)].revealed = true
            this.setState({ cards: temp })
            this.lastCliked = Number(e.currentTarget.id)
        }
    }
    pause = () => {
        clearInterval(this.timer)
        this.setState({ pause: true })
    }
    resume = () => {
        this.timing()
        this.setState({ pause: false })
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className={styles.memoryGameContainer}>
                {this.state.pause ? <div className={styles.gameOver}>
                <h1>matched:{this.gameEndCounter}</h1>
                <h1>time past:{this.state.time.hours}:{this.state.time.minutes}:{this.state.time.secondes}</h1>
                    <button onClick={this.resume}>▶️ </button></div> : ""}
                <button onClick={this.pause} >⏸️</button>
                <h1>{this.state.time.hours}:{this.state.time.minutes}:{this.state.time.secondes}</h1>
                {this.state.gameover ? <div className={styles.gameOver}>
                    <h1>Matching King</h1>
                    <h4>stats</h4>
                    <div>
                        <table>
                            <thead>
                                <td>tries</td>
                                <td>{this.triesCount} tried matches</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>total-Time</td>
                                    <td>{this.state.time.hours}:{this.state.time.minutes}:{this.state.time.secondes} to complete the game </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <th>best time</th>
                                <th>minimum tries yet</th>
                            </tfoot>
                        </table>
                    </div>
                </div> : null}
                <div className={styles.game}>
                    {this.state.cards.map((card, i) => {
                        return <div key={i} className={card.found === false ? styles.container : styles.container + " " + styles.found}>
                            <div id={i} onClick={this.tryCard} className={card.revealed === false ? styles.try : styles.try + " " + styles.revealed}>
                            </div>
                            <button className={styles.card} disabled={card.found}  >
                                <div>
                                    <h1 >{card.value}</h1>
                                    {/* <img key={i + 200} alt="card" src={card.value} height={"100%"} width={"100%"} /> */}
                                </div>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )

    }
}
