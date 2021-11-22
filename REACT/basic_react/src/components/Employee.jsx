import React  from "react";
import "./Employee.css"
class Employee extends React.Component{
    constructor(){super()}
    render(){
        return(
            <div id="Employee">
            <h1>{this.props.name}</h1>
            <img src={this.props.src}  alt="employee Img" />
            </div>
        )
    }
}
export default Employee