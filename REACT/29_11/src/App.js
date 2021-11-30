import { Component } from 'react';
import './App.css';
import GetPost from './components/didMount/GetPost';
import Persons from "./components/Persons/Persons"
class App extends Component {
  state={id:1}
  render(){
  return (
    <div className="App">
      <Persons/>
      <input type="text" onChange={e=>this.setState({id:Number(e.target.value)})} />
      <GetPost id={this.state.id}/>
    </div> 
  );
}
}

export default App;
