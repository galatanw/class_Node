import React from 'react';
import "./FoodCategory.css"

class FoodCategory extends React.Component {
    constructor() {
        super();
    }
    render() { 
        return ( 
            <div className="foodCategory">
                <img src={this.props.category.src}/>
                <h1>{this.props.category.title}</h1>
                <p>{this.props.category.info}</p>
            </div>
        );
    }
}
 
export default FoodCategory;