import {useRef,useState,useEffect} from 'react'

export default function FormRef() {
    const [count, setcount] = useState(true)
    const [inputs, setinputs] = useState("")
    const name=useRef()
    const email=useRef()
    const password=useRef()

    const  validInputs=()=>{
        if(name.current.value.length!=0&&password.current.value.length!=0&&email.current.value.length!=0){
          console.log("here");
            name.current.style.border=" 1px solid green"
            email.current.style.border=" 1px solid green"
            password.current.style.border=" 1px solid green"
            return false
        }
        else return true
    }
    return (
        <div>
            <form 
            onChange={(e)=>setcount(validInputs())}
            onSubmit={(e)=>{e.preventDefault();
                name.current.style.border=" 1px solid rgb(118, 118, 118,0.4)"
                email.current.style.border=" 1px solid rgb(118, 118, 118,0.4)"
                password.current.style.border=" 1px solid rgb(118, 118, 118,0.4)"
                setinputs(
                    <div>
                    {inputs}
                    <p>{name.current.value}</p>
                    <p>{email.current.value}</p>
                    <p>{password.current.value}</p>
                    <hr/>
                </div>)
                e.target.reset()
                setcount(true)                
             
                
}}>
                <input type="text" ref={name}  />
                <input type="text" ref={email}/>
                <input type="password" ref={password}/>
                <input type="submit" disabled={count} />
            </ form>
            {inputs}
        </div>
    )
}
