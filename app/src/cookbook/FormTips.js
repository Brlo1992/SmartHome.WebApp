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
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
export default class FormTips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTip: ""
        }
    }
    render() {
        return <div>
            <TextField
                name="newTip"
                id="outlined-name"
                label="Nowa porada"
                value={this.state.newTip}
                onChange={this.handleChangeTips}
                sx={{ width: true }}
                InputProps={{
                    endAdornment: <IconButton type="button" edge="end" onClick={this.tipSubmit}>
                        <AddIcon /> </IconButton>
                }}
            />
            {this.props.tips && this.props.tips.length ? this.showTips() : <b></b>}
        </div>
    }

    handleChangeTips = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    tipSubmit = (event) => {
        this.props.onTipsChange(this.state.newTip)
        this.setState({ newTip: "" })
        event.preventDefault();
    }

    showTips = (event) => {
        return <Grid item xs={10} >
        <List >
            {this.props.tips.map((tip, index) => {
                return <ListItem
                    secondaryAction={
                        <IconButton id={tip} edge="end" aria-label="delete" onClick = {() => this.props.onTipDeletion(index)}> 
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>

                        <TipsAndUpdatesOutlinedIcon fontSize="small" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={tip}
                    />
                </ListItem>
            })}
        </List>
    </Grid>
    }
}