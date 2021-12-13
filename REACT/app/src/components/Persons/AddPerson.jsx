import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class AddPerson extends Component {
    state={redirect:false}
    redirectPersons=(e)=>{
        this.setState({redirect:true})
        this.props.addPerson(e)
    }
    render() {
if(this.state.redirect){
    return <Redirect to={{
    pathname:'/persons',
    persons:this.state.person
    }}/>
    }
return (
    <div>
        <form onSubmit={this.redirectPersons}>
        <input type="text" name="myName" id="" />
        <input  type="number" name='age' />  
        <textarea cols="10" name='comment' rows="2"></textarea>
        <input type="submit" />  
        </form>
        </div>
        )
    }
}
