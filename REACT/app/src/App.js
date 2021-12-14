import './App.css';
import React, { Component } from 'react'
import {BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import AddPerson from './components/Persons/AddPerson';
import Persons from './components/Persons/Persons';
import Details from './Pages/Details';
export default class App extends Component{
    books=[]
    book={}
  addPerson=(e)=>{
    e.preventDefault()
    const form=e.currentTarget
    this.books.push(
        {name:form.myName.value,
        age:Number(form.age.value),
        comment:form.comment.value}
    )
    return form.reset()
}
showDetails=(index)=>{
  this.book=this.books[index]
  return
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
          <Route exact path={"/Persons"} render={()=><Persons persons={this.books} details={this.showDetails} />}/>
          <Route exact path={"/AddPersons"} render={()=><AddPerson addPerson={this.addPerson}/>}/>
          <Route exact path={"/Details"} render={()=><Details person={this.book}/>}/>
         </Switch>
       </div>
     </BrowserRouter>)
     }
    }
