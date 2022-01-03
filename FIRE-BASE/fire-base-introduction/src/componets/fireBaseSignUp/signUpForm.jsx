import {useEffect,useState} from 'react'
import asyncPostFireBase ,{validInputs}from './signUpFunction'

export default function SignUpForm() {
   
    const [Email, setEmail] = useState("")
   const [Password, setPassword] = useState("")
   const [Valid, setValid] = useState(true)
   function verifyInp(e) {
        const form = e.currentTarget
        const password = form.password.value
        const email = form.email.value
        setEmail(email)
        setPassword(password)
        if (validInputs(email,password)) {
            return setValid(false)
        } setValid(true)
    }
    function signUpSubmit(e) {
        e.preventDefault()
        if (!Valid)
            asyncPostFireBase({ email: Email, password: Password })
    }
    return (
        <div>
            <form onSubmit={(e)=>signUpSubmit(e)} onChange={(e)=>verifyInp(e)}>
                <input type="email" name='email' />
                <input type="password" name='password'/>
                <input type="submit" disabled={Valid} value="register"/>
            </form>
        </div>
    )
}
