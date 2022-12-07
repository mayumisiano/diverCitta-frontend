import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Carousel className='altura'>

                <Carousel.Item >
                    <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                        <Grid alignItems="center" item xs={6} className="loginPage">
                            <Box padding={10} >
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                                    Sejam bem vindes à DiverCittà!</Typography>
                                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>
                                    Aqui falamos sobre apoio, inclusão e diversidade!
                                     </Typography>
                            </Box>
                            <div className='configBotao11'>
                                <Box display="flex" justifyContent="center" >
                                    <Button className='botao22'> <ModalPostagem /></Button>
                                    <Link to='/posts' className='text-decorator-none '>
                                        <Button variant="outlined" className='botao22'>Ver Postagens</Button>
                                    </Link>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={6} >
                            <Box >
                                <img className='imagem' src="https://i.imgur.com/2qs304K.png" alt="É uma imagem de 5 crianças, uma menina negra de cabelo preto com braço esquerdo 
                    robotico de laço no cabelo amarelo camiseta branca por de baixo do vestido vestido também amarelo.Um menino branco com a 
                    perna esquerda amputada cabelo marrom claro camiseta azul e shorts vermelho. Um menino branco de cabelo loiro de cadeira 
                    de rodas de blusa branca e calça amarela a cadeira de rodas é azul. Uma menina branca cega de oculos escuros blusa roxa e
                    saia rosa e com uma bengala branca. E um meninobranco cabelo marrom escuro de blusa vermelha e calça marrom com a perna 
                    direita amputada  um"
                                    width="550px" height="500px" />
                            </Box>
                        </Grid>
                    </Grid>
                </Carousel.Item>

                <Carousel.Item>
                    <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                        <Grid alignItems="center" item xs={6} className="loginPage">
                            <Box padding={10} >
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo3'>
                                    SOBRE A DIVERCITTÀ </Typography>
                                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo3'>
                                    Somos uma rede social com a missão de disponibilizar um ambiente seguro e acolhedor para interação das pessoas com Deficiência e
                                    seus familiares, amigos e pessoas que apoiam a causa.
                                    Nós do DIVERCITTÀ sabemos que a falta de inclusão tem grande impacto em nossas vidas. 
                                    Assim transformando o DIVERCITTÀ em um espaço acolhedor e seguro para se conectar. </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} >
                            <Box >

                                <img className='imagem' src="https://i.imgur.com/GKvrdQJ.png" alt="" width="450px" height="500px" />
                            </Box>
                        </Grid>
                    </Grid>
                </Carousel.Item>

                <Carousel.Item>
                    <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                        <Grid alignItems="center" item xs={6} className="loginPage">
                            <Box padding={10} >
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo2'>
                                    Contribua com nosso feed!!</Typography>
                                <Typography variant="h5" gutterBottom color="textPrimary"component="h5" align="center"
                                    className='titulo2'>
                                    Esses temas já rolam aqui do Divercittà e podemos criar novos !</Typography>
                            </Box>
                            <Box >
                                    <Link to='/temas' className='text-decorator-none ' >
                                        <Button variant="outlined" className='botao20'>Ver Temas</Button>
                                    </Link>
                                </Box>
                            

                        </Grid>
                        <Grid item xs={6} >
                            <Box >
                                <img className='imagem' src="https://i.imgur.com/pE9eVYf.png" alt="" width="450px" height="500px" />
                            </Box>
                        </Grid>
                    </Grid>
                </Carousel.Item>

            </Carousel>

        </>
    );
}

export default Home;
