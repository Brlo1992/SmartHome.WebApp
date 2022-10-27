import React from "react";
import FormIngredients from "./formIngredients";
import FormTips from "./FormTips";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CheckSharp } from "@mui/icons-material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default class FormCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            name: "",
            ingredients: [],
            description: "",
            tips: [],
            nameInputError: false,
            ingredientsInputError: false,
            descriptionInputError: false,
            tipsInputError: false

        };
    }


    handleChangeName = (event) => {
        console.log("handleChange - this.state.value - " + this.state[event.target.name]);
        console.log(event.target.name);

        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        if (!this.state.description) {
            this.setState
                ({ descriptionInputError: true })
        }
        if (!this.state.name) {
            this.setState
                ({ nameInputError: true })
        }
        if (!this.state.ingredients || !this.state.ingredients.length) {
            this.setState
                ({ ingredientsInputError: true })
        }
        if (this.state.name && this.state.description && this.state.ingredients && this.state.ingredients.length) {
            console.log(JSON.stringify(this.state))
            this.props.addRecipe(this.state)
            this.setState({
                name: "",
                ingredients: [],
                description: "",
                tips: [],
                nameInputError: false,
                ingredientsInputError: false,
                descriptionInputError: false,
                tipsInputError: false
            })
        }
        event.preventDefault();
    }

    handleReset = (event) => {
        this.setState({

            name: "",
            ingredients: [],
            description: "",
            tips: []
        })
        event.preventDefault();
    }

    ingredientsChange = (newIngredient) => {
        const rawIngredients = JSON.stringify(this.state.ingredients);
        const newIngredients = JSON.parse(rawIngredients);

        newIngredients.push(newIngredient);
        this.setState({ ingredients: newIngredients })
    }

    deleteIngredients = (index) => {
        const rawIngredients = JSON.stringify(this.state.ingredients);
        const newIngredients = JSON.parse(rawIngredients);

        newIngredients.splice(index, 1)
        this.setState({ ingredients: newIngredients })

    }

    tipsChange = (newTip) => {
        const rawTips = JSON.stringify(this.state.tips);
        const newTips = JSON.parse(rawTips);
        newTips.push(newTip);
        this.setState({ tips: newTips })
    }

    tipDelete = (index) => {
        const rawTips = JSON.stringify(this.state.tips);
        const newTips = JSON.parse(rawTips);
        newTips.splice(index, 1)
        this.setState({ tips: newTips })
    }
    render() {
        console.log("render - this.state.value - " + this.state.name);
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>

                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Kategoria</InputLabel>
                            <Select
                                label="Age"
                                value={this.state.category}
                                onChange={this.handleChangeCategory}
                            >
                                <MenuItem value="Ciasta" >Ciasta</MenuItem>
                                <MenuItem value="Dania mięsne">Dania mięsne</MenuItem>
                                <MenuItem value="Dania mączne">Dania mączne</MenuItem>
                                <MenuItem value="Ryby">Ryby</MenuItem>
                                <MenuItem value="Sałatki">Sałatki</MenuItem>
                                <MenuItem value="Przetwory">Przetwory</MenuItem>
                                <MenuItem value="Pieczywo">Pieczywo</MenuItem>


                            </Select></FormControl>
                    </Grid>

                    {this.showNameInput()}

                    <Grid item xs={12}>
                        <FormIngredients ingredients={this.state.ingredients} onIngredientsChange={this.ingredientsChange}
                            onIngredientDeletion={this.deleteIngredients} onIngredientsInputError={this.state.ingredientsInputError} />
                    </Grid>

                    {this.showDescriptionInput()}

                    <Grid item xs={12} >

                        <FormTips tips={this.state.tips} onTipsChange={this.tipsChange} onTipDeletion={this.tipDelete} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" endIcon={<SendIcon />} type="submit" fullWidth={true} >
                            Wyślij
                        </Button></Grid>
                    <Grid item xs={3}>

                        <Button variant="outlined" endIcon={<DeleteIcon />} type="reset" fullWidth={true}>
                            Wyczyść
                        </Button></Grid>

                </Grid>
            </form>
        );
    }

    showNameInput() {
        if (this.state.nameInputError) {
            return <Grid item xs={12}>

                <TextField
                    error
                    id="outlined-name"
                    name="name"
                    label="Nazwa"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    sx={{ width: true }}
                    helperText="Nie  wprowadzono nazwy." />
            </Grid>;
        } else {
            return <Grid item xs={12}>

                <TextField
                    name="name"
                    id="outlined-name"
                    label="Nazwa"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    sx={{ width: true }}
                    helperText="" />
            </Grid>;
        }

    }

    showDescriptionInput() {
        if (this.state.descriptionInputError)
            return <Grid item xs={12}>
                <TextField
                    error
                    name="description"
                    id="outlined-name"
                    label="Przygotowanie"
                    value={this.state.description}
                    onChange={this.handleChangeName}
                    sx={{ width: true }}
                    multiline={true}
                    minRows={6}
                    helperText="Nie wprowadzono treści."
                />
            </Grid>;
        else
            return <Grid item xs={12}>
                <TextField
                    name="description"
                    id="outlined-name"
                    label="Przygotowanie"
                    value={this.state.description}
                    onChange={this.handleChangeName}
                    sx={{ width: true }}
                    multiline={true}
                    minRows={6} />
            </Grid>;
    }

    handleChangeCategory = (event) => {
        this.setState({ category: event.target.value })
    }
}