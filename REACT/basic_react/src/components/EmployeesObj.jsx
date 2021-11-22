import React from "react";
import EmployeeObj from "./EmployeeObj";
class Employees extends React.Component{
constructor(){super()}

render(){
    let Employees=[{
        name:"gal",
        age:20,
        time:"Full-time",
        src:"https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"
    },{
        name:"GAL",
        age:20,
        time:"Part-time",
        src:"https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"
    },
    {
        name:"gal",
        age:20,
        time:"Full-time",
        src:"https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"
    },
    {
        name:"gal",
        age:20,
        time:"Full-time",
        src:"https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"
    },
    {
        name:"gal",
        age:20,
        time:"Full-time",
        src:"https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"
    }
    ]   
     return(
         <div>
       <EmployeeObj obj={Employees[0]}/>
       <EmployeeObj obj={Employees[1]}/>
       <EmployeeObj obj={Employees[2]}/>
       <EmployeeObj obj={Employees[3]}/>
       <EmployeeObj obj={Employees[4]}/>
       </div>
    )
}
}
export default Employees