import { Component } from 'react';
import './App.css';
import GetById from './components/DidUpdate/GetPost';
import GetPost from './components/GetPosts/GetPost';
class App extends Component {
  state={id:1}
  id=(e)=>{
    this.setState({id:e.target.value})
  }
  render(){
  return (
    <div className="App">
      <GetPost />
      <input type="number" defaultValue={this.state.id} onChange={this.id} />
      <GetById id={this.state.id}/>

    </div> 
  );
}
}

export default App;
