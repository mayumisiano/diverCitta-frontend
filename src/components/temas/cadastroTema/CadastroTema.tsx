import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../model/Tema';
import { buscaId, put, post } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./CadastroTema.css"


function CadastroTema() {
	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	);

	const [tema, setTema] = useState<Tema>({
		id: 0,
		descricao: ""
	})

	useEffect(() => {
		if (token === "") {
			toast.error("Você precisa estar logade!", {
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

	useEffect(() => {
		if (id !== undefined) {
			findById(id)
		}
	}, [id])

	async function findById(id: string) {
		await buscaId(`/temas/${id}`, setTema, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedTema(event: ChangeEvent<HTMLInputElement>) {
		setTema({
			...tema,
			[event.target.name]: event.target.value,
		})
	}

	async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault()

		if (id !== undefined) {
			try {
				await put(`/temas`, tema, setTema, {
					headers: {
						Authorization: token
					}
				})
				toast.success("Tema atualizado! :)", {
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
				toast.error("Erroooooou!", {
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
		} else {
			try {
				await post(`/temas`, tema, setTema, {
					headers: {
						Authorization: token
					}
				})
				toast.success("Tema criado com sucesso! :)", {
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
				toast.error("Erroooooou!", {
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
		back()
	}

	function back() {
		navigate("/temas")
	}

	return (
		<Container maxWidth="sm" className="topo">
			<form onSubmit={onSubmit}>
				<Typography variant="h3" color="textSecondary"
					component="h1" align="center">
					Cadastre um tema:
				</Typography>
				<TextField value={tema.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedTema(event)}
					id="descricao" label="descrição"
					variant="outlined" name="descricao" margin="normal" fullWidth required/>
				<Button type="submit" variant="contained" color="primary">
					Finalizar
				</Button>
			</form>
		</Container>
	)
}

export default CadastroTema;