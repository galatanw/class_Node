import React, { Component } from 'react'

export default class AddPerson extends Component {
    render() {
        return (
            <div>
                <form>
                <input type="text" name="name" id="" />
                <input type="number" name='age' />    
                </form>
            </div>
        )
    }
}
