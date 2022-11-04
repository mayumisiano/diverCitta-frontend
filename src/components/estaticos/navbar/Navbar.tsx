import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{cursor: "pointer"}}>
                        <Typography variant="h5" color="inherit">
                            DiverCitta
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                               Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Login
                            </Typography>
                        </Box>


                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
