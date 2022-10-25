import React from "react";

export default class Ingredient extends React.Component {
    render() {
        return <li>
            {this.props.item}
        </li>
    }
}