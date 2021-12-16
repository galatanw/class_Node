import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Test({value}) {
    const [count,setCount]=useState(value)
    console.log(1);
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}
