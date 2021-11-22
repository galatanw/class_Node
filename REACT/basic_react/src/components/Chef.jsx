import React from 'react';
import "./chef.css"


class Chef extends React.Component{
    constructor(){super()}
    render(){ 
        return (
            <div className="chef">
            <img src={this.props.chef.img}/>
                <h4>{this.props.chef.name}</h4>
                 <p>{this.props.chef.role}</p>
             </div>
          );
    }
}
export default Chef
 