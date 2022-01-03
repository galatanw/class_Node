import {useState} from 'react'
import {validInputs}from '../fireBaseSignUp/signUpFunction'
import FireBaseApiKey from '../../../constant';
import axios from 'axios'
export default function LoginForum({setUser}) {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
   const [Token, setToken] = useState()
   const [Err, seterr] = useState()

async function useLoginNoAuto(){
try {
const login=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FireBaseApiKey}`,
{email:Email,password:Password,returnSecureToken:true})
setToken(login)
setUser(login)
} catch (error) {
    console.log(error);
seterr(error.response.data.error.message)
console.log(error.response.data.error.message);    
}
return
}
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
        if (!Valid){
            useLoginNoAuto()
        }
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
