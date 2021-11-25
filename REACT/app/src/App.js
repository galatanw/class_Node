import './App.css';
import Car from './components/Car/Car';

function App() {
  return (
    <div className="App">
      <Car car={{price:20000,img:"https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg",model:"benz"}}/>
    </div>
  );
}

export default App;
