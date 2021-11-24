import { Component } from 'react'
import "./Register.css"
export default class Register extends Component {
    state = { firstName: "", lastName: "", password: "", confirmPassword: "", terms: "", email: "" }
    getValue = (e) => {
        const fieldName = e.target.name
        const inputsField = {}
        inputsField[fieldName] = e.target.value
        if (fieldName === "terms") inputsField[fieldName] = e.target.checked
        this.setState(inputsField)
    }

    passwordConfirmation = (e) => {
        if (this.state.password !== this.state.confirmPassword) {
            e.target.value = ""
            e.target.placeholder = "passwords does not match"
            e.target.style.borderColor = "red"
        }
        else e.target.style.color = "green"
    }
    formSubmitted = (e) => {
        e.preventDefault()
        const obj = this.state
        const form = e.target
        const fullForm = {}
        console.log(this.state.email==="");
        for (const key in obj) {
            const element = obj[key];
            if (obj.terms !== true) return alert("terms must be accepted")
            if (element !== "") {
                form[key].placeholder = `${key}`
                form[key].style.borderColor = "initial"
                fullForm[key] = element
            }
            else {
                form[key].placeholder = "can't be empty"
                form[key].style.borderColor = "red"
                return
            }
        }
        console.log(fullForm);

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
                            <label>first name</label><br />
                            <input type="text" onChange={this.getValue} name="firstName" />
                        </span>
                        <span>
                            <label>last name</label><br />
                            <input type="text" onChange={this.getValue} name="lastName" />
                        </span>
                    </span>
                    <label>Email</label>
                    <input type="email" onChange={this.getValue} name="email" />
                    <label>password</label>
                    <input type="password" onChange={this.getValue} name="password" />
                    <label>confirm password</label>
                    <input type="password" onChange={this.getValue} onBlur={this.passwordConfirmation} name="confirmPassword" />
                    <span className="registerTerms">
                        <input type="checkbox" onClick={this.getValue} name="terms" />
                        <p>please read and accepct the <a href="#terms">terms</a>  before regiseration</p>
                    </span>
                    <input type="submit" value="submit" />
                </form >
            </div>
        )
    }
}
