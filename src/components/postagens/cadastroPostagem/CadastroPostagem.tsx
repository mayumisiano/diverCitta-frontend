import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import Tema from "../../../model/Tema";
import User from "../../../model/User";
import { busca, buscaId, put, post } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
//importar css

function CadastroPostagem() {

	let navigate = useNavigate();
	const { id } = useParams<{ id: string }>(); //atualizar post que já existe precisa do id.
	const [temas, setTemas] = useState<Tema[]>([]) //colocar temas já cadastrados.
	const token = useSelector<TokenState, TokenState["tokens"]>(
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
				theme: "light",
				progress: undefined,
			});
			navigate("/login")

		}
	}, [token])

	const [tema, setTema] = useState<Tema>( //armazena um tema específico
		{
			id: 0,
			descricao: ''
		})
	const [postagem, setPostagem] = useState<Postagem>({
		id: 0,
		titulo: '',
		texto: '',
		foto: '',
		data: '',
		tema: null,
		usuario: null
	})

	const userId = useSelector<TokenState, TokenState['id']>(
		(state) => state.id
	)

	const[usuario, setUser] = useState<User>({
		id: +userId,
		nome:'',
		usuario:'',
		senha:'',
		foto: '',
		deficiencia:''
	})

	useEffect(() => {
		setPostagem({
			...postagem,
			tema: tema,
			usuario:usuario
		})
	}, [tema])

	useEffect(() => {
		getTemas()
		if (id !== undefined) {
			findByIdPostagem(id)
		}
	}, [id])

	async function getTemas() {
		await busca("/temas", setTemas, {
			headers: {
				'Authorization': token
			}
		})
	}

	async function findByIdPostagem(id: string) {
		await buscaId(`/postagens/${id}`, setPostagem, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

		setPostagem({
			...postagem,
			[e.target.name]: e.target.value,
			tema: tema
		})

	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()

		if (id !== undefined) {
			put(`/postagens`, postagem, setPostagem, {
				headers: {
					'Authorization': token
				}
			})
			toast.success('Postagem atualizada com sucesso', {
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
			post(`/postagens`, postagem, setPostagem, {
				headers: {
					'Authorization': token
				}
			})
			toast.success('Postagem cadastrada com sucesso', {
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
		back()

	}

	function back() {
		navigate('/posts')
	}

	return (
		<Container maxWidth="sm" className="backCadPost">
			<form onSubmit={onSubmit} >
				<Typography variant="h4" color="textSecondary" component="h1" align="center" >{id === undefined ? <span>Cadastre</span> : <span>Atualize</span>} sua postagem:</Typography>
				<FormControl >
					<InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
							headers: {
								'Authorization': token
							}
						})}>
						{
							temas.map(tema => (
								<MenuItem value={tema.id}>{tema.descricao}</MenuItem>
							))
						}
					</Select>
					<FormHelperText>Escolha um tema para a postagem</FormHelperText>

				</FormControl>

				<TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="título" variant="outlined" name="titulo" placeholder="mínimo de 5 caracteres, máximo de 60" margin="normal" fullWidth required />

				<TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" placeholder="mínimo de 10 caracteres, máximo de 1000" margin="normal" fullWidth required />

				<TextField value={postagem.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="foto" label="foto" name="foto" variant="outlined" placeholder='Insira a URL da sua foto' margin="normal" fullWidth required/>

				<Button type='submit' variant='contained'>
					Finalizar
				</Button>
			</form>
		</Container >
	)
}
export default CadastroPostagem;