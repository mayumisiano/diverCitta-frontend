import React { useEffect, useState} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import ModalPostagem from "../../Components/Postagens/ModalPostagem/ModalPostagem";
import { useNavigate , Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../Store/Tokens/tokensReducer";
import { toast } from "react-toastify";
import './Home.css';
import { useEffect } from 'react';

function Home(){

    let navigate = useNavigate();
    const token= useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
            );

            useEffect(() => {
                if (token == "") {
                  toast.error('Você precisa estar logado', {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: false,
                      theme: "colored",
                      progress: undefined,
                  });
                    navigate("/login")
                }
            }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6} className=".loginPage">
                    <Box paddingX={20} >
                        <Typography variant="h3" 
                        gutterBottom color="textPrimary" 
                        component="h3" align="center" 
                        className='titulo'>
                            Sejam bem vindes à DiverCittà!</Typography>
                        <Typography variant="h5" 
                        gutterBottom color="textPrimary" 
                        component="h5" align="center" 
                        className='titulo'>
                            inclui aí: façam parte dessa mudança! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to='/posts' className='text-decorator-none'>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/Pc5pmxL.jpeg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;