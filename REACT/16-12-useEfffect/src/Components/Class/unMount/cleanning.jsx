import React, { useEffect } from 'react'

export default function Cleanning() {
    useEffect(()=>{
        return ()=>{
            console.log("unmount");
        }
    })
    return (
        <div>
            
        </div>
    )
}
