import React, {useState} from "react";
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

export default function FormTips(props){
const [newTip, setNewTip]=useState('');

const handleChangeTips = (event) => {
    setNewTip(event.target.value)
}

const tipSubmit = (event) => {
    props.onTipsChange(newTip)
    setNewTip("")
    event.preventDefault();
}

const showTips = (event) => {
    return <Grid item xs={10} >
    <List >
        {props.tips.map((tip, index) => {
            return <ListItem
                secondaryAction={
                    <IconButton id={tip} edge="end" aria-label="delete" onClick = {() => props.onTipDeletion(index)}> 
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
return <div>
            <TextField
                name="newTip"
                id="outlined-name"
                label="Nowa porada"
                value={newTip}
                onChange={handleChangeTips}
                sx={{ width: true }}
                InputProps={{
                    endAdornment: <IconButton type="button" edge="end" onClick={tipSubmit}>
                        <AddIcon /> </IconButton>
                }}
            />
            {props.tips && props.tips.length ? showTips() : <b></b>}
        </div>
}
