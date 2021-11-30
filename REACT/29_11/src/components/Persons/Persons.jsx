import React, { Component } from 'react'
import Person from './Person'
export default class Persons extends Component {
    state = {
        people: [
            { firstName: "gal", lastName: "atanw", id: "341241" },
            { firstName: "gal", lastName: "atanw", id: "121212" },
            { firstName: "gal", lastName: "atanw", id: "123415" }
        ],
        update: {
            firstName: "",
            lastName: "",
            id: ""
        }
    }
    deleteFun = (e) => {
        const element = e.target
        let temp = this.state.people
        temp.splice(element, 1)
        this.setState({ people: temp })
    }
    update = (e) => {
        const element = e.target

        const temp = this.state.people
       let updatePerson=temp.filter((person)=>{ return person.id === element.id})
        this.setState({ update: updatePerson[0] })
    }
    updatePerson = (e) => {
        e.preventDefault()
        let form = e.target
        let temp = this.state.people
        for (const iterator of temp) {
            if (form.id === iterator.id) {
                iterator.firstName = form.firstName.value
                iterator.lastName = form.lastName.value
            }
        }
        this.setState({
            update: {
                firstName: "",
                lastName: "",
                id: ""
            }
            , people: temp
        })
        form.reset()

    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>delete</th>
                        <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.people.map((pers, i) => {
                        return <tr key={pers.id} ><Person person={pers} deleteFun={this.deleteFun} update={this.update} loc={i} /></tr>
                    })}
                    </tbody>
                </table>
                <form id={this.state.update.id} onSubmit={this.updatePerson}>
                    <input placeholder={this.state.update.firstName} name="firstName" type="text" />
                    <input placeholder={this.state.update.lastName} name="lastName" type="text" />
                    <input value="sumbit" type="submit" />
                </form>
            </div>
        )
    }
}
