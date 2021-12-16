import { useState } from 'react'
import './App.css'
import ThreeCounters from './components/Class/counters/ThreeCounters'
import Name from './components/Class/Name'
import YourName from './components/Class/NameColor'
import Test from './components/Class/Test'
import NathanUser from './components/Class/User/NathanUser'
import User from './components/Class/User/user'
import Vacations from './components/Vactaions/Vacations'

function App() {
    const [count,setCount]=useState(0)
 return <div className='App'>
{/*   
<YourName/>
<Name name={"gal"}/>
<ThreeCounters/> */}
{/* <User/> */}
{/* <NathanUser/> */}
 {/* <Vacations/> */}
<input type="number" onChange={(e)=>setCount(e.target.value)} />
<Test value={count}/>
 </div>
}

export default App
