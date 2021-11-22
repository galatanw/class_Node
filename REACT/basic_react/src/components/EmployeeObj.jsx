import React from "react";

class EmployeeObj extends React.Component{
    constructor(){super()}
    render(){
        return(
            <div id="Employee">
            <h1>{this.props.obj.age}</h1>
            <h1>{this.props.obj.time}</h1>
            <h1>{this.props.obj.name}</h1>
            <img src={this.props.obj.src}  alt="employee Img" />
            </div>
        )
    }
}
export default EmployeeObj