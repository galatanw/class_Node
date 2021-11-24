import { Component } from 'react'

export default class Login extends Component {
  
    submitted=(e)=>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.password.value);
        e.target.reset()
    }
    lengthValidation=(e)=>{
        e.target.value.length>4?e.target.style.color="green":e.target.style.color="red"
    }

    render() {
        return (
                <form onSubmit={this.submitted}>
                <label >Full name</label><br/>
                <input  name="name" type="text"/><br/>
                <label >Password</label><br/>
                <input  onChange={this.lengthValidation} name="password" type="password"/><br/>        
                <input type="submit"/>  
                
                </form>
        )
    }
}
