import React from "react";
import Ingredient from "./ingredient";

export default function Ingredients(props){
const showIngredients=()=>{
    return <ul>
        {props.elements.map(el=>{return <Ingredient item={el}/>})}
    </ul>
}
return <div>
    <h3>Składniki:</h3>
    {showIngredients()}
</div>
}
