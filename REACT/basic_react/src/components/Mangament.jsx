import React from 'react';
import Manager from './Manager';
import "./managment.css"
class Managment extends React.Component {
    constructor() {
        super();
    }
    render() { 
        const managment=[{name:"ALIS WONDERLAND" ,img:"https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560917__340.jpg",role:"Adversiting Manager"},
        {name:"JHON WHICK" ,img:"https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg ",role:"Financial Director"},
        {name:"MILA KUNIS" ,img:"https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007__340.jpg",role:"Secretory"},]
            return(
            <div className="managerWrapper">
                <Manager manager={managment[0]}/>
                <Manager manager={managment[1]}/>
                <Manager manager={managment[2]}/>
            </div>
          );
    }
}
 
export default Managment;