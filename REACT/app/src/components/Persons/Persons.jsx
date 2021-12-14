import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class Persons extends Component {
    state={
        redirect:false,
        details:false
}
BooksElements=this.props.books.map((item,i)=>{
    return <tr key={i}>
              <td>{item.name},{item.age}</td>
              <td onClick={(e)=>this.details(e,i)} id={i}>details</td>
          </tr>
}
)
details=(e,i)=>{
        this.props.details(i)
        this.setState({details:true})
}    

    render() {
        console.log("rendered");
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
