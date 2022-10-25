import React from "react";
export default function CookDescription(props) {
    return <div>
        <h3>Sposób przygotowania:</h3>
        {props.description}
    </div>
}