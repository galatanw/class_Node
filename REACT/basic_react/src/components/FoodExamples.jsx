import React from 'react';
import "./foodExamples.css"
import FoodExample from './FoodExample';
class FoodExamples extends React.Component {
    constructor() {
        super();
    }
    render() { 
        const MEALS=[{name:"PIZZA",img:"https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478__340.jpg",info:" PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA"},
        {name:"SALAD",img:"https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__480.jpg",info:" SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD SALAD"},
        {name:"DESSERTS",img:"https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg",info:" DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS DESSERTS"}]
        return (
            <div className="foodExamples">
                <FoodExample meal={MEALS[0]}/>
                <FoodExample meal={MEALS[1]}/>
                <FoodExample meal={MEALS[2]}/>
            </div>
          );
    }
}
 
export default FoodExamples;