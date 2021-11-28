import { Component } from 'react';
import './App.css';
import TenPosts from './components/TenPosts/TenPosts';
class App extends Component {
  state={show:false}
  render(){
  return (
    <div className="App">
      <button onClick={()=>this.setState({show:!this.state.show})}>start</button>
      {
        this.state.show ?
        <TenPosts/>:
        ""
      }
    </div>
  );
}
}

export default App;
