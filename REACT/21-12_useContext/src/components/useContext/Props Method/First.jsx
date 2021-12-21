import React from 'react'
import Second from './second'

export default function First({context}) {
    return (
        <div>
            <h2>First</h2>
            <Second context={context}/>
        </div>
    )
}
