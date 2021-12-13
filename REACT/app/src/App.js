import './App.css';
import React, { Component } from 'react'
import {Redirect, BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import AddPerson from './components/Persons/AddPerson';
import Persons from './components/Persons/Persons';
import Details from './Pages/Details';
export default class App extends Component{

  state=
  {
    persons:[],personIndex:null
  }
  addPerson=(e)=>{
    e.preventDefault()
    const form=e.currentTarget
    const temp=[...this.state.persons]
    temp.push(
        {name:form.myName.value,
        age:Number(form.age.value),
        comment:form.comment.value}
    )
    this.setState({persons:temp})
    form.reset()
}
showDetails=(e)=>{
  const personsIndex=Number(e.currentTarget.id)
  this.setState({personIndex:personsIndex})
}
render(){
     return (
     <BrowserRouter>
       <div className="App">
         <header  id='header'>
           <nav id='navbar'>
            <p id='myName'><span id="firstName">Gal</span> <span id='lastName'> Atanw</span></p>
             <ul id='navbar-ul'>
           <li className='nav-link-li'><Link className="nav-link" to='/'>Home</Link></li>
           <li className='nav-link-li'><Link className="nav-link" to='/AddPersons'>Add Persons</Link></li>
           <li className='nav-link-li'><Link className="nav-link" to='/Persons'>Persons</Link></li>
            </ul>
            </nav>
            </header>
            <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/Persons"} render={()=><Persons persons={this.state.persons} details={this.showDetails} />}/>
          <Route exact path={"/AddPersons"} render={()=><AddPerson addPerson={this.addPerson}/>}/>
          <Route exact path={"/Details"} render={()=><Details person={this.state.persons[this.state.personIndex]}/>}/>
         </Switch>
       </div>
     </BrowserRouter>)
     }
    }
