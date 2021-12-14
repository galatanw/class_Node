import { useState } from 'react'

export default function Name({name}){
    const [colorVal, setColor] = useState("red")
    const color={color:colorVal?"red":"green"}
    return (
      <div className="App">
      <p onClick={()=>setColor(!colorVal)} style={color}>{name}</p>      
      </div>
    )
}