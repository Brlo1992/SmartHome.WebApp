import React, { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function RecipesInCategories(props) {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        
        setOpen(!open.valueOf())
    }
    const showRecipes = () => {
        return <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {props.filteredRecipesNames.map(recipe => {
                    return <ListItemButton sx={{ pl: 4 }} onClick={() => props.setSelectedRecipe(recipe)}>
                        <ListItemText primary={recipe} />
                    </ListItemButton>
                })}
            </List>
        </Collapse>
    }
    return <><div>
        <ListItemButton onClick={()=>handleClick()}>
            <ListItemText primary={props.cat} />
            {
            open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {showRecipes()}
    </div></>
}
