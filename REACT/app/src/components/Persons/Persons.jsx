import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class Persons extends Component {
    state={
        redirect:false,
        persons:null,
        details:false

}
PersonsElement=<h1>no persons yet</h1>
componentDidMount(){
    this.showPersons()
}
details=(e)=>{
        this.props.details(e)
        this.setState({details:true})
}    
showPersons=()=>{
if(this.props.persons.length>0){
this.setState({persons:this.props.persons})
return this.PersonsElement= this.props.persons.map((item,i)=>{
        return <li key={i}>
                  <p>{item.name},{item.age}</p>
                  <button onClick={this.details} id={i}>details</button>
              </li>
}
)}



}
    render() {
if(this.state.redirect){
return <Redirect to="/AddPersons"/>
}
if(this.state.details){
    return <Redirect to="/Details"/>
    }
    
return (

<div>
<button onClick={()=>this.setState({redirect:true})}>add person</button>
<ul>
{this.PersonsElement}
</ul>
</div>
)
}
}
