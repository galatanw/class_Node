import {Fragment, useState} from 'react'
import SignUpForm from './componets/fireBaseSignUp/signUpForm'
import LoginForum from './componets/loginFireBase/LoginForum'
export default function App() {
const [User, setUser] = useState(null)
  function SetToken(Token){
    setUser(Token)
}
  return (
    <div>
    
    {User?null:<Fragment >
     <SignUpForm/> 
     <LoginForum setUser={SetToken}/>
    </Fragment>}
    </div>
  )
}
