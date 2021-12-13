import './App.css';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import AddPerson from './components/Persons/AddPerson';
import Persons from './components/Persons/Persons';
function App (){

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
          <Route exact path={"/AddPersons"} component={AddPerson}/>
          <Route exact path={"/Persons"} component={Persons}/>
         </Switch>
       </div>
     </BrowserRouter>);}
export default App;
