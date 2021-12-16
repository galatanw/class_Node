import { useState,useEffect} from 'react'
import './App.css'
import Post from './Components/Posts/Posts'
import Cleanning from './Components/unMount/cleanning'
function App() {
  const [value,setValue]=useState(1)
  const [display,setDisplay]=useState(true)
  const change=(e)=>{
    if(Number(e.target.value)>0&&Number(e.target.value)<=100){
      setValue(Number(e.target.value))
    }
  }   
  return (
    <div className="App">
      <input type="text" onChange={change} />
        <button onClick={()=>setDisplay(!display)}>click</button>
        {display?
      <Cleanning />:null}
    <Post postNum={value} />
    </div>
  )
}

export default App
