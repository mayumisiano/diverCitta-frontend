import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
	const dispatch = useDispatch();

	let navigate = useNavigate();

	const token = useSelector<TokenState, TokenState['tokens']>(
		state => state.tokens
	);

	function goLogout() {
		dispatch(addToken(''));
		toast.info('Até mais', {
			icon: "🤝",
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			theme: 'light',
			progress: undefined,
		});
		navigate('/login');
	}

	var navbarComponent;

	if (token !== '') {
		navbarComponent = (
			<AppBar position="static" className="barra">
				<Toolbar variant="dense" >

					{/* <Typography variant="body2" component="p">
						<img src={user.foto} alt="Imagem do Usuário" width="200px" height="200px" />
					</Typography> */}		

		
					<Box>
						<Link to='/home'>
						<Typography className="logotipo">
							<img src="https://i.imgur.com/52548Pp.png" alt="Logo Divercittà" />
						</Typography>
						</Link>
					</Box>

					<Grid  container direction="row" justifyContent="center" className="menu">
						<Box display="flex" >
							<Link to="/home" className="text-decorator-none">
								<Box mx={1} className="cursor">
									<Typography variant="h6" color="inherit">
										Home
									</Typography>
								</Box>
							</Link>
							<Link to="/sobre-nos" className="text-decorator-none">
								<Box mx={1} className="cursor">
									<Typography variant="h6" color="inherit">
										Sobre Nós
									</Typography>
								</Box>
							</Link>

							<Link to="/temas" className="text-decorator-none">
								<Box mx={1} className="cursor">
									<Typography variant="h6" color="inherit" noWrap>
										Temas
									</Typography>
								</Box>
							</Link>

							<Link to="/formularioTema" className="text-decorator-none">
								<Box mx={1} className="cursor">
									<Typography variant="h6" color="inherit" noWrap>
										Cadastrar tema
									</Typography>
								</Box>
							</Link>

							<Link to="/login" className="text-decorator-none">
								<Box mx={1} className="cursor" onClick={goLogout}>
									<Typography variant="h6" color="inherit">
										Logout
									</Typography>
								</Box>
							</Link>
						</Box>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}

	return <>{navbarComponent}</>;
}

export default Navbar;