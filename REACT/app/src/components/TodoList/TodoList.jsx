import React, { Component } from 'react'

export default function TodoList(props) {
        const deleteMe = props.deletee
        const task = props.tasks.task
        const status = props.tasks.status.toString()
        return (
            <>
                <td><  input onClick={props.update}  type="button" id={props.loc} /></td>
                <td>{task} </td>
                <td>{status}</td>
                <td><  input onClick={props.deleter} disabled={deleteMe} type="checkbox" id={props.loc} /></td>
            </>
        )
}
