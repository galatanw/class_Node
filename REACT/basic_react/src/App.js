import './App.css';
import React from "react"
// import Media from "./components/Media"
// import Employee from "./components/Employee"
// import BlueSquare from "./components/BlueSquare"
// import ImportantPar from "./components/ImportantPar"
//   import Employees from './components/EmployeesObj';
import FoodCategories from './components/FoodCategories';
import Chefs from './components/Chefs';
import FoodExamples from './components/FoodExamples';
import Managment from './components/Mangament';
import Name from './components/Name';
class App extends React.Component {
  constructor(props){super()}
  render(){
  return(
    <div >
      <h1>GAL ATANW</h1>
      <FoodCategories/>
      <Chefs/>
    <FoodExamples/>
    <Managment/>
    <Name/>
    </div>
  
    )}
}
  

export default App;
