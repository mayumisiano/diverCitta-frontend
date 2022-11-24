import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';import Carousel from 'react-bootstrap/Carousel';
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
			<Grid 
			container
			direction="row" 
			justifyContent="center" 
			alignItems="center" 
			className='caixa'>
				<Grid alignItems="center" item xs={6} className="loginPage">
					<Box padding={10} >
						<Typography variant="h3"
							gutterBottom color="textPrimary"
							component="h3" align="center"
							className='titulo'>
							Sejam bem vindes à DiverCittà!</Typography>
						<Typography variant="h5"
							gutterBottom color="textPrimary"
							component="h5" align="center"
							className='titulo'>
							Aqui falamos e apoiamos inclusão e diversidade! 
							inclui aí: façam parte dessa mudança! </Typography>
					</Box>
					<Box display="flex" justifyContent="center" className='espacoBotao'>
						{/* <Box marginRight={1} >
							<ModalPostagem />
						</Box> */}
						<Link to='/posts' className='text-decorator-none '>
							<Button variant="outlined" className='botao2'>Ver Postagens</Button>
						</Link>
					</Box>
				</Grid>
				<Grid item xs={6} >
					<Box >
					<img className='imagem' src="https://i.imgur.com/2qs304K.png" alt="É uma imagem de 5 crianças, uma menina negra de cabelo preto com braço esquerdo 
					robotico de laço no cabelo amarelo camiseta branca por de baixo do vestido vestido também amarelo.Um menino branco com a 
					perna esquerda amputada cabelo marrom claro	camiseta azul e shorts vermelho. Um menino branco de cabelo loiro de cadeira 
					de rodas de blusa branca e calça amarela a cadeira de rodas é azul.	Uma menina branca cega de oculos escuros blusa roxa e
					saia rosa e com uma bengala branca. E um meninobranco cabelo marrom escuro de blusa vermelha e calça marrom com a perna 
					direita amputada  um" 
					width="550px"
					height="500px"
					 />
					</Box>
				</Grid>				
			</Grid>
		</Carousel.Item>

		<Carousel.Item>
						<Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
							<Grid alignItems="center" item xs={6} className="loginPage">
								<Box padding={10} >
									<Typography variant="h3"
										gutterBottom color="textPrimary"
										component="h3" align="center"
										className='titulo'>
										Participe com a gente!!</Typography>
									<Typography variant="h5"
										gutterBottom color="textPrimary"
										component="h5" align="center"
										className='titulo'>
										Contribua também com uma nova postagem! </Typography>
								</Box>
								<Box display="flex" justifyContent="center">
									<Button className='botao2'>
										<ModalPostagem />
									</Button>
									{/* <Link to='/posts' className='text-decorator-none'>
							<Button variant="outlined" className='botao'>Ver Postagens</Button>
						</Link> */}
								</Box>
							</Grid>
							<Grid item xs={6} >
								<Box >

								<img className='imagem' src="https://i.imgur.com/GKvrdQJ.png" 
								alt=""
								width="450px"
								height="500px"
								 />
								</Box>
							</Grid>
						</Grid>
				</Carousel.Item>

				<Carousel.Item>
						<Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
							<Grid alignItems="center" item xs={6} className="loginPage">
								<Box padding={10} >
									<Typography variant="h3"
										gutterBottom color="textPrimary"
										component="h3" align="center"
										className='titulo'>
										A União faz a força!!</Typography>
									<Typography variant="h5"
										gutterBottom color="textPrimary"
										component="h5" align="center"
										className='titulo'>
										Esses temas devem fazer parte do nosso dia-a-dia.</Typography>
								</Box>
								<Box display="flex" justifyContent="center" alignItems="start">
									{/* <Box marginRight={1}>
										<ModalPostagem />
									</Box> */}
									<Link to='/temas' className='text-decorator-none'>
							<Button variant="outlined" className='botao2'>Ver Temas</Button>
						</Link>
								</Box>
							</Grid>
							<Grid item xs={6} >
								<Box >
								<img className='imagem' src="https://i.imgur.com/pE9eVYf.png" alt="" 
								width="450px"
								height="500px"
								 />
								</Box>
							</Grid>
						</Grid>
				</Carousel.Item>

		</Carousel>


		</>
	);
}

export default Home;