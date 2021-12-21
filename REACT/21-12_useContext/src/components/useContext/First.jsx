import React from 'react'
import Second from './second'

export default function First({context}) {
    return (
        <div>
            <Second context={context}/>
        </div>
    )
}
