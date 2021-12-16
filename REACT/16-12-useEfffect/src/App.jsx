import { useState,useEffect} from 'react'
import './App.css'
import Post from './Components/Posts/Posts'
function App() {
  const [value,setValue]=useState(1)
  const change=(e)=>{
    if(Number(e.target.value)>0&&Number(e.target.value)<=100){
      setValue(Number(e.target.value))
    }
  }   
  return (
    <div className="App">
      <input type="text" onChange={change} />
    <Post postNum={value} />
    </div>
  )
}

export default App
