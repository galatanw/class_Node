import React from 'react';
import "./manager.css"
class Manager extends React.Component {
    constructor() {
        super();
    }
    render() { 
        return (<div className="manager">
            <img src={this.props.manager.img} alt="manager" />
            <h3>{this.props.manager.name}</h3>
            <p>{this.props.manager.role}</p>
        </div> );
    }
}
 
export default Manager;