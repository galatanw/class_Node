import React from 'react';
import FoodCategory from './FoodCategory';
import "./FoodCategories.css"

class FoodCategories extends React.Component {
    constructor(){super()}
    render() { 
const Categories=[{title:"Wrapped Candy",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fcandy-xxl.png&f=1&nofb=1",info:"Im a candy I've been wrapped so know I'm a wrapped candy"},
{title:"Cake",src:"http://images.clipartpanda.com/happy-birthday-cake-clipart-black-and-white-cake-md.png   ",info:"We used to be toghetr then they teared us to pieces now I'm a piece of cake"},
{title:"Biscuite",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fillpop.com%2Fimg_illust%2Ffood%2Fsnack_m30.png&f=1&nofb=1",info:"Im good with coffe and tea but dont dip me if youre name is pusha T"},
{title:"Bread",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.avxq1dbPuWA1sodbPhoyuwHaDw%26pid%3DApi&f=1",info:"Do not say the sentance 'if you dont have bread eat cakes to poor people'"},
{title:"Crossiants",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uErsK9hNGWeud7GnN10kIQHaHa%26pid%3DApi&f=1",info:"Crossiants are better french women are simply much better"},
{title:"Lollipop",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fm%2FW%2Fi%2FD%2FF%2FW%2Fsucker-image-hi.png&f=1&nofb=1",info:"Let me take you to the candy shop.."},
]

        return <div className="foodCategoriesWrapper">
    <FoodCategory category={Categories[0]}/>
    <FoodCategory category={Categories[1]}/>
    <FoodCategory category={Categories[2]}/>
    <FoodCategory category={Categories[3]}/>
    <FoodCategory category={Categories[4]}/>
    <FoodCategory category={Categories[5]}/>
        </div>;
    }
}
 
export default FoodCategories;