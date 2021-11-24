import { Component } from 'react'
import "./Register.css"
export default class Register extends Component {
    state = { firstName:"", lastName:"", password:"", confirmPassword:"", terms:"" }
    getValue = (e) => {
        const fieldName=e.target.id
        let inputsField = {}
        inputsField[fieldName] = e.target.value
        if(fieldName==="terms")inputsField[fieldName] = e.target.checked
        this.setState(inputsField)
    }

    passwordConfirmation=(e)=>{
        if (this.state.password != this.state.confirmPassword){ 
    e.target.value=""
    e.target.placeholder="passwords does not match"
}
        else e.target.style.color = "green"
        
    }
    formSubmitted=(e)=>{
        e.preventDefault()
        let obj=this.state
        let form=e.target
        console.log(form["email"].value);
        for (const key in obj) {
                const element = obj[key];
                console.log(element);
                if(element==="")form[key].placeholder="cannot be empty"
            }
        }        
    


    render() {

        return (
            <div className="formWrapper">
            <form className="registerForm" onSubmit={this.formSubmitted}>
                <span className="registerTitle">
                    <div className="registerTitleLine"></div>
                    <h1>Register</h1>
                    <div className="registerTitleLine"></div>
                </span>
                <span className="registerNames">
                <span>
                <label>first name</label><br/>
                <input type="text" onChange={this.getValue} name    ="firstName" />
                </span>
                <span>
                <label>last name</label><br/>
                <input type="text" onChange={this.getValue} name="lastName" />
                </span>
                </span>
                <label>Email</label>
                <input type="email" onChange={this.getValue} name="email" />
                <label>password</label>
                <input type="password" onChange={this.getValue} name="password" />
                <label>confirm password</label>
                <input type="password" onChange={this.getValue} onBlur={this.passwordConfirmation} name="confirmPassword" />
                <input type="checkbox" onClick={this.getValue} name="terms"/>
                <input type="submit" value="" />
            </form >
        </div>
        )
    }
}
