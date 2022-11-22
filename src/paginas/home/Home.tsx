import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import {Button as ButtonBootstrap} from 'react-bootstrap/Button';
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
					<div >
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
									{/* <Box marginRight={1}>
							<ModalPostagem />
						</Box> */}
									<Link to='/posts' className='text-decorator-none'>
										<Button variant="outlined" className='botao'>Ver Postagens</Button>
									</Link>
								</Box>
							</Grid>
							<Grid item xs={6} >
								<img src="https://i.imgur.com/9FT6TuF.png" alt="" width="600px" height="600px" />
							</Grid>
						</Grid>

					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div >
						<Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
							<Grid alignItems="center" item xs={6} className=".loginPage">
								<Box paddingX={20} >
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
									<Button variant="outlined" className='botao'>
										<ModalPostagem />
									</Button>
									{/* <Link to='/posts' className='text-decorator-none'>
							<Button variant="outlined" className='botao'>Ver Postagens</Button>
						</Link> */}
								</Box>
							</Grid>
							<Grid item xs={6} >
								<img src="https://i.imgur.com/WNdTKED.png" alt="" width="600px" height="600px" />
							</Grid>
						</Grid>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div >
						<Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
							<Grid alignItems="center" item xs={6} className=".loginPage">
								<Box paddingX={20} >
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
								<Box display="flex" justifyContent="center">
									{/* <Box marginRight={1}>
										<ModalPostagem />
									</Box> */}
									<Link to='/temas' className='text-decorator-none'>
							<Button variant="outlined" className='botao'>Ver Temas</Button>
						</Link>
								</Box>
							</Grid>
							<Grid item xs={6} >
								<img src="https://i.imgur.com/vlHgfS8.png" alt="" width="600px" height="600px" />
							</Grid>
						</Grid>
					</div>
				</Carousel.Item>

			</Carousel>


		</>
	);
}

export default Home;