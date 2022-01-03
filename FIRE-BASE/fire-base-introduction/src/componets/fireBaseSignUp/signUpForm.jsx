import {useEffect,useState} from 'react'
import React from 'react'
import asyncPostFireBase ,{validInputs}from './signUpFunction'
export default function SignUpForm() {
   const [Email, setEmail] = useState("")
   const [Password, setPassword] = useState("")
   const [Valid, setValid] = useState(true)
   function verify(e) {
        const form = e.currentTarget
        const password = form.password.value
        const email = form.email.value
        setEmail(email)
        setPassword(password)
        if (validInputs(email,password)) {
            return setValid(false)
        } setValid(true)
    }
    
    function userSignUp(e) {
        e.preventDefault()
        if (!Valid)
            asyncPostFireBase({ email: Email, password: Password })
    }
    return (
        <div>
            <form onSubmit={(e)=>userSignUp(e)} onChange={(e)=>verify(e)}>
                <input type="email" name='email' />
                <input type="password" name='password'/>
                <input type="submit" disabled={Valid} value="register"/>
            </form>
        </div>
    )
}
