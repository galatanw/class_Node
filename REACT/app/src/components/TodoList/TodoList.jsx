import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        const deleteMe = this.props.deleteMe
        const task = this.props.task
        const status = this.props.status
        return (
                <tr>
                    <td>{task} </td>
                    <td>{status}</td>
                    <td>< input disabled={deleteMe} type="checkbox" id={this.props.key} /></td>
                </tr>
        )
    }
}
