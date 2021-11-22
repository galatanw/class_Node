import React from 'react';
import Chef from './Chef';
import "./Chefs.css"

class Chefs extends React.Component {
    constructor() {super();}
    render() { 
        const Chefs=[{img:"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939436__340.jpg",name:"FIRST CHEF",role:"Executive Chef"},
        {img:"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939436__340.jpg",name:"FIRST CHEF",role:"Executive Chef"},
        {img:"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939436__340.jpg",name:"FIRST CHEF",role:"Executive Chef"},
        {img:"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939436__340.jpg",name:"FIRST CHEF",role:"Executive Chef"}]
        return ( 
            
            <div className="chefsWrapper">
            <Chef chef={Chefs[0]}/>
            <Chef chef={Chefs[1]}/>
            <Chef chef={Chefs[2]}/>
            <Chef chef={Chefs[3]}/>
            </div>
         );
    }
}
 
export default Chefs;