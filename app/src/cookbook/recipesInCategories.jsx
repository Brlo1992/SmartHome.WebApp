import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export default class RecipesInCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true

        }
    }
    showRecipes = () => {
        return <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {this.props.filteredRecipesNames.map(recipe => {
                    return <ListItemButton sx={{ pl: 4 }} onClick={()=> this.props.setSelectedRecipe(recipe)}>
                        <ListItemText primary={recipe} />
                    </ListItemButton>
                })}
            </List>
        </Collapse>
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                open: !prevState.open
            }
        })
    }
    render() {
        return <div>
            <ListItemButton onClick={this.handleClick}>
                <ListItemText primary={this.props.cat} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {this.showRecipes()}
        </div>
    }
}
