import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button,  Card, CardActions, CardContent } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

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
			<Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
				<Grid alignItems="center" item xs={6} className="loginPage">

				<Typography variant="h2"
							gutterBottom color="textPrimary"
							component="h2" align="center"
							className='titulo'>
							Sejam bem vindes à DiverCittà!</Typography>
				
					<Box paddingX={20}  >
					
						<Typography variant="h5"
							gutterBottom color="textPrimary"
							component="h5" align="center"
							className='titulo'>
							Aqui falamos sobre inclusão e apoio!<br></br>
							Inclui aí: façam parte dessa mudança! 
						</Typography>
						<Box display="flex" justifyContent="center" className='espacobotao'>
						<Box marginRight={1} >
							<ModalPostagem />
						</Box>

							<Link to='/posts' className='text-decorator-none'>
							<Button variant="outlined" className='botao'>Ver Postagens</Button>
						</Link>
					</Box>
					</Box>
					
				</Grid>
				<Grid item xs={6} >
					<img src="https://i.imgur.com/9FT6TuF.png" alt="É uma imagem de 5 crianças, uma menina negra de cabelo preto com braço esquerdo 
					robotico de laço no cabelo amarelo camiseta branca por de baixo do vestido vestido também amarelo.Um menino branco com a 
					perna esquerda amputada cabelo marrom claro	camiseta azul e shorts vermelho. Um menino branco de cabelo loiro de cadeira 
					de rodas de blusa branca e calça amarela a cadeira de rodas é azul.	Uma menina branca cega de oculos escuros blusa roxa e
					saia rosa e com uma bengala branca. E um meninobranco cabelo marrom escuro de blusa vermelha e calça marrom com a perna 
					direita amputada  um" width="700px" height="700px" />
				</Grid>
				
			</Grid>
			

		</>
		
	);
}

export default Home;