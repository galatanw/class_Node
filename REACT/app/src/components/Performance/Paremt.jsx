import {useState,useMemo} from 'react'
import Child from './Child'

export default function Paremt() {
    const [coloredText, setcoloredText] = useState(false)
    const [counter, setcounter] = useState(0)
    const color={color:coloredText?"red":"black"}
    function counterHandle(){
         setcounter(counter+1)
    }
    const colorText=useMemo(()=>{
        return <Child val={counter}/>
    },[counter])
    function coloredTextHandle(){
        setcoloredText(!coloredText)
    }
    return (
        <div>
            <p onClick={coloredTextHandle} style={color}>Counter Val:</p>
                {colorText}
            <button onClick={counterHandle}>+1</button>
        </div>
    )
}
