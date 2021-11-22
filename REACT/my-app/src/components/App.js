import './App.css';
import Counter from './counter/counter';
import TwoCounters from './counter/TwoCounters';
import Input from './input/Input';
import SmartCounter from './smartCounter/smartCounter';
import ToggleColor from './ToggleColor/ToggleColor';

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <TwoCounters/> */}
    {/* <SmartCounter counter={20}/> */}
    <ToggleColor text={"hey hey hey"}/>
    <Input/>
    </div>
  );
}

export default App;
