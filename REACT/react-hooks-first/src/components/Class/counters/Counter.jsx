import React, {useState} from "react";
export default function Counter(){
const [counter,addCount]=useState(0)
const addOne=()=>{
    addCount(counter+1)
}
return(
    <div>
        <p>{counter}</p>
        <button onClick={addOne}>+1</button>
    </div>
)


}