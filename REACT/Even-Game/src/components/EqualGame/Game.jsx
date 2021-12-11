import { Component, Fragment } from 'react'
import * as styles from "./Game.module.css"
import { SingleNumber, Messages, Scores } from './singleNumber';
export default class Game extends Component {
    state = { allNumbers: [], won: false, end: "", fine: 0, fineAlert: false, scoreDisplay: false }
    matches = 0
    evenNum = 0
    startTime;
    localStorageData = [];
    displayGame = false;
    stop = false
    fined="";
    
    createRandom=()=>{
        this.evenNum=0
        this.matches=0
        const allNumbers = []
        let random;
        let even = Math.floor(Math.random() * 10 + 1)
        for (let index = 0; index < 10; index++) {
            if (index === even) {
                const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
                random = numbers[Math.floor(Math.random() * 10)]
                allNumbers.push({ random: random, clicked: false })
            }
            else {
                random = Math.floor(Math.random() * 20)
                allNumbers.push({ random: random, clicked: false })
            }
            if (random % 2 === 0) this.evenNum++
        }
        this.setState({ allNumbers: allNumbers })
    }
    buildScores=()=>{
        const data = JSON.parse(localStorage.getItem("history"))
        for (const key in data) {
            const element = data[key];
            this.localStorageData.push(
                <li key={key}>
                    <h1>{key}</h1>
                    <h3>time:{element.time}</h3>
                    <h3>fine:{element.fineSec}</h3>
                    <h3>total:{element.totalTime}</h3>
                </li>
            )
        }
    }

    componentDidMount() {
        this.buildScores()
        this.createRandom()
    }



    check = (e) => {
        if (this.stop === false) { return }
        if (this.stop === true) { return }
        const index = Number(e.target.id)
        const temp = [...this.state.allNumbers]
        const number = temp[index].random
        if (number % 2 === 0) {
            temp[index].clicked = true
            this.matches++
            // if game ended
            if (this.matches === this.evenNum) {
                clearInterval(this.stop)
                this.stop = true
                const name = new Date()
                // local storage exists?
                if (JSON.parse(localStorage.getItem("history")) === null) {
                    const obj = {}
                    obj[name] = { totalTime: (this.state.end + this.state.fine) + "sc", fineSec: (this.state.fine) + "sc", time: (this.state.end) + "sc" }
                    localStorage.setItem("history", JSON.stringify(obj))
                }
                // if not
                else {
                    const localData = JSON.parse(localStorage.getItem("history"))
                    localData[name] = { totalTime: this.state.end + this.state.fine, fineSec: this.state.fine, time: this.state.end }
                    localStorage.setItem("history", JSON.stringify(localData))
                }
                this.setState({won:true })
            }
        }
        // fine for unevenNumber
        else {
            this.setState({ fine: Number(this.state.fine) + 1, fineAlert: true })
            // vanish alert
            if(this.fined===""){
                this.fined=setTimeout(() =>
                {this.setState({ fineAlert:false })
                this.fined=""
            console.log(this.fined);},
                3000)
            
            }
                
        }
    }
    startGame = (e) => {
        if(this.stop===true){
            this.createRandom()
            this.setState({won:false})
        }
        this.setState({ scoreDisplay: false })
        const time = new Date().getTime()
        this.startTime = Number(time)
        this.stop = setInterval(() => {
            const end = parseInt(Number((new Date().getTime()) - Number(this.startTime)) / 1000)
            this.setState({ end: end })
        }, 500)
    }

    scoreDisplay = (e) => {
        if (typeof this.stop == 'boolean') {
            this.setState({ scoreDisplay: !this.state.scoreDisplay })
        }

    }
    render() {
        const displayScore = { display: this.state.scoreDisplay ? "block" : "none" }
        return (
            <div className={styles.container}>
                <button onClick={this.startGame}>{
                (this.stop===false)?"start":"restart"
                }</button>
                <h1>time: {Number(this.state.fine) + Number(this.state.end)}sc</h1>
                <div className={styles.numbers}>
                    {this.state.allNumbers.map((item, i) => {
                        return <Fragment key={i}><SingleNumber id={i} onClick={this.check} dis={item.clicked} item={item.random} /></Fragment>
                    })}
                </div>
                <Messages end={this.state.end} fine={this.state.fine} won={this.state.won} fineAlert={this.state.fineAlert} />
                <Scores localStorageData={this.localStorageData} displayScore={displayScore} scoreDisplay={this.scoreDisplay} class={styles.score} />
            </div>
        )
    }
}
