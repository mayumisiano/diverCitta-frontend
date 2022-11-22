import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/Service';
import UserLogin from '../../model/UserLogin';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import { login } from '../../services/Service';
import './Login.css';

function Login() {
	let history = useNavigate();
	const dispatch = useDispatch();
	const [token, setToken] = useState('');
	const [userLogin, setUserLogin] = useState<UserLogin>(
		{
			id: 0,
			nome: '',
			usuario: '',
			senha: '',
			foto: '',
			token: ''
		}
	)

	function updatedModel(e: ChangeEvent<HTMLInputElement>) {
		setUserLogin({
			...userLogin,
			[e.target.name]: e.target.value
		})
	}

	const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
		id: 0,
		nome: '',
		usuario: '',
		senha: '',
		foto: '',
		token: '',
	});

	useEffect(() => {
		if (token != "") {
			dispatch(addToken(token));
			history('/home');
		}
	}, [token])

	useEffect(() => {
		if (respUserLogin.token !== '') {
			dispatch(addToken(respUserLogin.token))
			dispatch(addId(respUserLogin.id.toString()))
			history('/home')
		}
	}, [respUserLogin.token])

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			await login(`/usuarios/logar`, userLogin, setRespUserLogin)
			toast.success('Usuario logado com sucesso', {
				icon: "👋",
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				theme: "light",
				progress: undefined,
			});
		} catch (error) {
			toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				theme: "light",
				progress: undefined,
			});
		}
	}


	return (
		<Grid className="back" container direction="row" justifyContent="center" alignItems="center">
			<Grid alignItems="center" xs={6}>
				<Box className="form" paddingX={9}>
					<form  onSubmit={onSubmit}>
						<Typography
							variant="h3"
							gutterBottom
							color="textPrimary"
							component="h3"
							align="center"
							className="textos1"
						>
							Entrar
						</Typography>
						<TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
							id="usuario"
							label="usuário"
							variant="outlined"
							name="usuario"
							margin="normal"
							fullWidth
						/>
						<TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
							id="senha"
							label="senha"
							variant="outlined"
							name="senha"
							margin="normal"
							type="password"
							fullWidth
						/>
						<Box marginTop={2} textAlign="center">
							<Button  className="botao1" type="submit" variant="contained">
								Logar
							</Button>
						</Box>
					</form>
					<Box display="flex" justifyContent="center" marginTop={2}>
						<Box marginRight={1}>
							<Typography variant="subtitle1" gutterBottom align="center">
								Não tem uma conta?
							</Typography>
						</Box>
						<Link to="/cadastrousuario" className="text-decorator-none negrito">
							<Typography
								variant="subtitle1"
								gutterBottom
								align="center"
								
							>
								Cadastre-se
							</Typography>
						</Link>
					</Box>
				</Box>
			</Grid>
			<Grid xs={6} className="imagem"></Grid>
		</Grid>
	);
}

//Linha 7: Onde aparecerá todos os conteúdos na tela
//Linha 8: É o container
//Linha 9: Item do Grid container, vai ficar o formulário (texto,long,senha,botão)
//Linha 64: Items do Grid container, vai ficar a imagem(imagem e campos)
//Linha 11: Criação do Formulário
//Linha 12: Typography > onde serão colocados os textos (entrar)
//Linha 22: Textfield > entrada de texto (usuario)
//Linha 30: Textfield > entrada de texto(senha)
//Linha 40: Link que inclui a rota

export default Login;
