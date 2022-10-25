import React from "react";
import Ingredient from "./ingredient";
export default class Ingredients extends React.Component {

    render() {
        return <div>
            <h3>Składniki:</h3>
            {this.showIngredients()}
        </div>
    }


    showIngredients() {
        return <ul>
            {this.props.elements.map(el => {
                return <Ingredient item={el} />;
            })}
        </ul>;
    }
}
