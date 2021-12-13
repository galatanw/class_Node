import React, { Component } from 'react'

export default function Details (props) {
    const person=props.person  
  console.log(person);
    return (
            <div>
                <h4>Name</h4>
                <p>{person.name}</p>
                <h1>age</h1>
                <p>{person.age}</p>
                <h1>Comment</h1>
                <p>{person.comment}</p>
            </div>
        )
}
