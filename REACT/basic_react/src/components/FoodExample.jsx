import React from 'react';
import "./foodExample.css"
class FoodExample extends React.Component {
    constructor() {
        super();
    }
    render() { 
        return (
            <div className="foodExample">
                <h1>{this.props.meal.name}</h1>
                <p>{this.props.meal.info}</p>
                <img src={this.props.meal.img}/>
            </div>
          );
    }
}
 
export default FoodExample;