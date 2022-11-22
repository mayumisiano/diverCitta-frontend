import React, { useState, useEffect, ChangeEvent } from 'react';
import User from '../../model/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastrarUsuario.css';

function CadastroUsuario() {

	let navigate = useNavigate();
	const [confirmarSenha, setConfirmarSenha] = useState<String>('');
	const [user, setUser] = useState<User>({
		id: 0,
		nome: '',
		usuario: '',
		senha: '',
		foto: '',
		deficiencia: '',
	});

	const [userResult, setUserResult] = useState<User>({
		id: 0,
		nome: '',
		usuario: '',
		senha: '',
		foto: '',
		deficiencia: '',
	});

	useEffect(() => {
		if (userResult.id != 0) {
			navigate('/login');
		}
	}, [userResult]);

	function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
		setConfirmarSenha(e.target.value);
	}

	function updatedModel(e: ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		if (confirmarSenha == user.senha && user.senha.length >= 8) {
			cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
			toast.success('Usuario cadastrado com sucesso', {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				theme: "light",
				progress: undefined,
			});
		} else {
			toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
		<Grid container className='back2' direction='row' justifyContent='center' alignItems='center'>
			<Grid item xs={6} ></Grid>

			<Grid item xs={6} alignItems='center'>

				<Box className='form2' paddingX={5}>
					<form onSubmit={onSubmit}>
						<Typography variant='h3' component='h3' align='center' className='textos2'>Cadastrar</Typography>

						<TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' required fullWidth />

						<TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' placeholder='Digite um e-mail válido' variant='outlined' name='usuario' margin='normal' required fullWidth />

						<TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' placeholder='Insira a URL da sua foto' variant='outlined' name='foto' margin='normal' fullWidth />

						<TextField value={user.deficiencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='deficiencia' label='deficiência' placeholder='Insira qual deficiência você possui' variant='outlined' name='deficiencia' margin='normal' fullWidth />

						<TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' placeholder='Digite sua senha' variant='outlined' name='senha' margin='normal' required type='password' fullWidth />

						<TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' placeholder='Confirme sua senha' variant='outlined' name='confirmarSenha' margin='normal' required type='password' fullWidth />

						<Box className="box" marginTop={2} textAlign='center'>

							<Link to='/login' className='text-decorator-none'>
								<Button variant='contained' className='btnCancelar'>
									Cancelar
								</Button>
							</Link>

							<Button className='botaoCad' type='submit' variant='outlined' >
								Cadastrar
							</Button>
						</Box>
					</form>
				</Box>
			</Grid>

		</Grid>
	);
}

export default CadastroUsuario;
