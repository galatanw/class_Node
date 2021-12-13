import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class Persons extends Component {
    state={
        redirect:false,
        persons:[
        {name:"gal",age:20}
    ]
}
    render() {
        if(this.state.redirect){
           return <Redirect to="/AddPersons" />
        }
        const PersonsElement=this.state.persons.map((item,i)=>{
            return <li key={i}>{item.name}</li>
        })
        return (
            <div>
                <button onClick={()=>this.setState({redirect:true})}>add person</button>
            <ul>
                {PersonsElement}
            </ul>
            </div>
        )
    }
}
