import { useState } from 'react'

export default function YourName(){
    const [colorVal, setColor] = useState("red")
    const color={color:colorVal?"red":"green"}
    return (
      <div className="App">
      <p onClick={()=>setColor(!colorVal)} style={color}>Gal atnaw</p>      
      </div>
    )
}