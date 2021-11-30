import  { Component,Fragment } from 'react'
import * as styles from "./Game.module.css"
import {SingleNumber,Messages, Scores} from './singleNumber';
export default class Game extends Component {
    state = { allNumbers: [], matches: [], won: "", end: "", fine: 0, fineAlert: "",scoreDisplay:false }
    length = 0
    startTime;
    localStorageData = [];
    displayGame = false;
    stop = "notStarted"
    componentDidMount() {
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
            )}
        const allNumbers = []
        let random=2;
        let even=Math.floor(Math.random() * 10)
        for (let index = 0; index < 10; index++) {
            if (index===even) {
                const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
                random = numbers[Math.floor(Math.random() * 10)]
                allNumbers.push(random)
            }
            else {
                random = Math.floor(Math.random() * 20)
                allNumbers.push(random)
            }
            if (random % 2 === 0) this.length++
        }
        this.setState({ allNumbers: allNumbers })
    }



    check = (e) => {
if (this.stop === "notStarted") return
if(this.stop==="GameOver")return
const temp = [...this.state.matches]
const number = Number(e.target.innerText)
if (number % 2 === 0) {
temp.push(Number(e.target.id))
if (temp.length === this.length) {
 clearInterval(this.stop)
this.stop="GameOver"
const name = new Date()
if (JSON.parse(localStorage.getItem("history")) === null) {
const obj = {}
obj[name] = { totalTime: (this.state.end + this.state.fine) + "sc", fineSec: (this.state.fine) + "sc", time: (this.state.end) + "sc" }
localStorage.setItem("history", JSON.stringify(obj))
}
else {
const localData = JSON.parse(localStorage.getItem("history"))
localData[name] = { totalTime: this.state.end + this.state.fine, fineSec: this.state.fine, time: this.state.end }
localStorage.setItem("history", JSON.stringify(localData))
}
this.setState({ matches: temp, won: `Game won you took ${this.state.end + this.state.fine} seconds` })
}
this.setState({ matches: temp })
}
else {
this.setState({ fine: Number(this.state.fine) + 1, fineAlert: `fine+1sc,fined ${this.state.fine + 1}sc so far` })
setTimeout(() => setInterval(() => {
this.setState({ fineAlert: "" })
}, 3000))
}
}










    startGame = (e) => {
        this.setState({scoreDisplay:false})
        const time = new Date().getTime()
        this.startTime = Number(time)
        this.stop = setInterval(() => {
            const end = parseInt(Number((new Date().getTime()) - Number(this.startTime)) / 1000)
            this.setState({ end: end })}, 500)
        e.target.style.display = "none"
    }
    scoreDisplay=(e)=>{
        if (typeof this.stop=="string"){
            this.state.scoreDisplay===false?e.target.innerText="Hide":e.target.innerText="scores Board"
            this.setState({scoreDisplay:!this.state.scoreDisplay})
        }
        
    }
    render() {
      const  displayScore={display:this.state.scoreDisplay?"block":"none"}
        return (
            <div className={styles.container}>
                <button onClick={this.startGame}>START</button>
                <h1>time: {Number(this.state.fine) + Number(this.state.end)}sc</h1>
                <div className={styles.numbers}>
                    {this.state.allNumbers.map((item, i) => {
                        return this.state.matches.indexOf(i) > -1 ?
                            <Fragment key={i}><SingleNumber id={i} onClick={this.check} dis={true} item={item}/></Fragment>:
                            <Fragment key={i}><SingleNumber id={i} check={this.check} dis={false} item={item}/></Fragment>})}
                </div>
                <Messages won={this.state.won} fineAlert={this.state.fineAlert}/>
                <Scores localStorageData={this.localStorageData}    displayScore={displayScore}  scoreDisplay={this.scoreDisplay} class={styles.score}  />
                </div>
        )
    }
}
