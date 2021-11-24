import { Component } from 'react'
import "./LoginWithState.css"

export default class LoginWithState extends Component {
    state = {name:"", password:""}
    submitted = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.password.value);
        e.target.reset()
    }
    paslengthValidation = (e) => {
        this.setState({password: e.target.value})
    }
    
    namelengthValidation = (e) => {
        this.setState({name:e.target.value})
    }
    render() {
        let disableStatus =this.state.password.length>4&&this.state.name.length>3;
        const pasColor= {color:this.state.password.length>4?"green":"red"} ;
        const txtColor= {color:this.state.name.length>3?"green":"red"} ;
        return (
            <form className="LoginWithState" onSubmit={this.submitted}>
                <label >Full name</label>
                <input style={txtColor} onChange={this.namelengthValidation} name="name" type="text" />
                <label >Password</label>
                <input style={pasColor} onChange={this.paslengthValidation} name="password" type="password" />
                <input type="submit" disabled={!disableStatus} />

            </form>
        )
    }
}
