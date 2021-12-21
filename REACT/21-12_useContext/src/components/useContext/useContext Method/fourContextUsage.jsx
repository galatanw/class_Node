import React,{useContext} from 'react'
import { NameContext } from "../../../Context"
export default function FourContext() {
     const nameContext=useContext(NameContext)
    return (
        <div>
            <h2>Fourth</h2>

            <p>{nameContext.name}</p>
        </div>
    )
}
