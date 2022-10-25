import React from "react";
import CookDescription from './cookDescription';
import Ingredients from './ingredients';
import Tips from "./tips";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider'

export default class Recipe extends React.Component {
    render() {
        return <div>
            <h2>{this.props.recipe.name}
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick= {this.delete} 
                    >
                    
                    <DeleteIcon fontSize="small" />
                </IconButton></h2>

            <Ingredients elements={this.props.recipe.ingredients} />
            <CookDescription description={this.props.recipe.description} />
            <Tips tips={this.props.recipe.tips} />
            <Divider />
        </div>

    }
    delete = () => {
        this.props.onRecipeDeletion(this.props.index)
    }
    
}