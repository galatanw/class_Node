import { Component } from 'react';
import './App.css';
import TodolistWrapper from "./components/TodoList/TodolistWrapper"
class App extends Component {
  render(){
  return (
    <div className="App">
      <TodolistWrapper/>
    </div> 
  );
}
}

export default App;
