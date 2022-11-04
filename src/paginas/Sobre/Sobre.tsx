import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <>
    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Typography variant='h4'>Sobre Nós</Typography>  
    <p>Somos um grupo de desenvolvedoras formadas pela Generation Brasil, e temos interesse em construir aplicações web voltadas para o tema de acessibilidade para pessoas PCD's.</p>
    </Grid>

    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Typography variant='h5'>Nosso time</Typography>
    </Grid>

    {/*Primeiro Card*/}
    <Grid container direction='row'>
        <Grid container direction='column'>
            <Grid container direction='column'>               
                    <Box marginTop={3} textAlign='center'>
                    <Typography variant='h6'>Cristaly Alves</Typography>                    
                    <p>Desenvolvedora jr.</p>
                    <p></p>
                    <p>Email: </p>
                    <p><Button>Contato</Button></p>
                    </Box>               
            </Grid>
        </Grid>       

    {/* Segundo Card */}
    <Grid container direction='row'>
        <Grid container direction='column'>            
            <Box marginTop={3} textAlign='center'>
                <Typography variant='h6'>Eliane Pereira</Typography>                    
                <p>Desenvolvedora jr.</p>
                <p></p>
                <p>Email: </p>
                <p><Button>Contact</Button></p>
            </Box>                          
        </Grid>
    </Grid>    

    {/* Terceiro Card */}
    <Grid container direction='row'>
        <Grid container direction='column'>                                 
            <Box marginTop={2} textAlign='center'>
            <Typography variant='h6'>Juliana Nonaka</Typography>
            <p>Desenvolvedora jr.</p>
            <p>Sou apaixonada por...</p>
            <p>Email:</p>            
                <Button>
                    Contato
                </Button>                        
            </Box>
        </Grid>
    </Grid>

    {/* Quarto Card */}
    <Grid container direction='row'>
        <Grid container direction='column'>                                 
            <Box marginTop={2} textAlign='center'>
            <Typography variant='h6'>Leticia Santos</Typography>
            <p>Desenvolvedora jr.</p>
            <p>Sou apaixonada por...</p>
            <p>Email:</p>            
                <Button>
                    Contato
                </Button>                        
            </Box>
        </Grid>
    </Grid>

    {/* Quinto Card */}
    <Grid container direction='row'>
        <Grid container direction='column'>                                 
            <Box marginTop={2} textAlign='center'>
            <Typography variant='h6'>Leticia Moneda</Typography>
            <p>Desenvolvedora jr.</p>
            <p>Sou apaixonada por...</p>
            <p>Email:</p>            
                <Button>
                    Contato
                </Button>                        
            </Box>
        </Grid>
    </Grid>

    {/* Sexto Card   */}
    <Grid container direction='row'>
        <Grid container direction='column'>                                 
            <Box marginTop={2} textAlign='center'>
            <Typography variant='h6'>Lucy Suxo</Typography>
            <p>Desenvolvedora jr.</p>
            <p>Sou apaixonada por...</p>
            <p>Email:</p>            
                <Button>
                    Contato
                </Button>                        
            </Box>
        </Grid>
    </Grid>

    {/* Sétimo Card */}
    <Grid container direction='row'>
        <Grid container direction='column'>                                 
            <Box marginTop={2} textAlign='center'>
            <Typography variant='h6'>Paula Mayumi</Typography>
            <p>Desenvolvedora jr.</p>
            <p>Sou apaixonada por...</p>
            <p>Email:</p>            
                <Button>
                    Contato
                </Button>                        
            </Box>
        </Grid>
    </Grid>
    </Grid> 
    </>
);
}
export default Sobre;

