import React from 'react'

export default function Child({val}) {
    console.log("render");
    return (
        <div>
            <h1>{val}</h1>
        </div>
    )
}
