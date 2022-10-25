import React from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export default class FormIngredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newIngredient: ""
        }
    }

    render() {
        if (this.props.onIngredientsInputError) {
            return <div>
            <TextField
                error
                name="newIngredient"
                id="outlined-name"
                label="Nowy składnik"
                value={this.state.newIngredient}
                onChange={this.handleChangeIngredients}
                sx={{ width: true }}
                InputProps={{
                    endAdornment: <IconButton type="button" edge="end" onClick={this.ingSubmit}>
                        <AddIcon /> </IconButton>
                }}
                helperText="Nie dodano składników"
            />
            {this.props.ingredients && this.props.ingredients.length ? this.showIngredients() : <b></b>}


        </div>
        } else {
            return <div>
            <TextField
            
                name="newIngredient"
                id="outlined-name"
                label="Nowy składnik"
                value={this.state.newIngredient}
                onChange={this.handleChangeIngredients}
                sx={{ width: true }}
                InputProps={{
                    endAdornment: <IconButton type="button" edge="end" onClick={this.ingSubmit}>
                        <AddIcon /> </IconButton>
                }}
            />
            {this.props.ingredients && this.props.ingredients.length ? this.showIngredients() : <b></b>}


        </div>
        }
        
    }

    handleChangeIngredients = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    ingSubmit = (event) => {

        this.props.onIngredientsChange(this.state.newIngredient);
        this.setState({ newIngredient: "" })
        event.preventDefault();
    }

    
showIngredients = () => {
    return <Grid item xs={10} >
        <List >
            {this.props.ingredients.map((ingr, index) => {
                return <ListItem sx={{ width: true }} 
                    secondaryAction={
                        <IconButton id={ingr} edge="end" aria-label="delete" onClick={()=> this.props.onIngredientDeletion(index)} >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    }>
                    <ListItemAvatar>

                        <ShoppingBasketOutlinedIcon fontSize="small" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={ingr}
                    />
                </ListItem>

            })}


        </List>
    </Grid>

}
}


