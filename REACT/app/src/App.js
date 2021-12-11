import { Component } from 'react';
import './App.css';
import MemoryGame from './components/Game/MemoryGame';
class App extends Component {
  state={startGame:false,array:[]}
 
startMemoryGame=(e)=>{  
 e.preventDefault()
  const temp=[]
  for (let index = 0; index < Number(e.target.select.value); index++) {
  temp.push(index+1)
}
this.setState({startGame:true,array:temp})
}
  render(){
    return (
    <div className="App">
      <form onSubmit={this.startMemoryGame}>
      <select name='select'>
        <option value="3" key="98">6</option>
        <option value="6" key="99">12</option>
        <option value="12" key="100">24</option>
      </select>
        <input type="submit" value={"start"} />
      </form>
      
    {this.state.startGame?<MemoryGame cards={this.state.array}/>:null}
    </div> 
  );
}
}

export default App;
