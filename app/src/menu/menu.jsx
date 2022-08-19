import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import MenuItem from './menuItem';

export default function Menu() {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Smart Home Menu</h2>
            <Divider />
            <br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                    <Grid item xs={3}>
                        <MenuItem />
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Divider />
        </div>
    );
}