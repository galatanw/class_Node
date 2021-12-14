import {useState} from 'react'

export default function NathanUser() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
    const [form,setForm]=useState("formInputs")
  const changePassword=(e)=>{
    setPassword(e.target.value)
   }
   const changeEmail=(e)=>{
    setEmail(e.target.value)
   }
   const changeName=(e)=>{
    setName(e.target.value)
   }
   const   settingForm=(e)=>{
       e.preventDefault()
       setForm({name,email,password})
       console.log({name,email,password});
    }
    return (
        <div>
            <form onSubmit={settingForm}>
                <input type="text" name='name' onChange={changeName} />
                <input type="email" name='email' onChange={changeEmail} />
                <input type="password" name='password' onChange={changePassword} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
