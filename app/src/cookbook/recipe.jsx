import React from "react";
import CookDescription from './cookDescription';
import Ingredients from './ingredients';
import Tips from "./tips";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider'

export default function Recipe(props) {
    const deletee = () => {
        props.onRecipeDeletion(props.index)
    }

    return <div>
        <h2>{props.recipe.name}
            <IconButton
                edge="end"
                aria-label="delete"
                onClick={deletee}
            >

                <DeleteIcon fontSize="small" />
            </IconButton></h2>

        <Ingredients elements={props.recipe.ingredients} />
        <CookDescription description={props.recipe.description} />
        <Tips tips={props.recipe.tips} />
        <Divider />
    </div>
}
