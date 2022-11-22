import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { Box } from "@mui/material";
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Postagem from '../../../model/Postagem';

function DeletarPostagem() {

	let navegate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	);
	const [post, setPosts] = useState<Postagem>()

	useEffect(() => {
		if (token == '') {
			toast.error('Você precisa estar logado', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				theme: "light",
				progress: undefined,
			});
			navegate("/login")
		}
	}, [token])

	useEffect(() => {
		if (id !== undefined) {
			findById(id)
		}
	}, [id])

	async function findById(id: string) {
		buscaId(`/postagens/${id}`, setPosts, {
			headers: {
				'Authorization': token
			}
		})
	}

	function sim() {
		navegate('/posts')
		deleteId(`/postagens/${id}`, {
			headers: {
				'Authorization': token
			}
		});
		toast.success('Postagem deletada com sucesso!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			theme: "light",
			progress: undefined,
		});
	}

	function nao() {
		navegate('/posts')
	}

	return (
		<>
			<Box m={2}>
				<Card variant="outlined" >
					<CardContent>
						<Box justifyContent="center">
							<Typography color="textSecondary" gutterBottom>
								Deseja deletar a Postagem:
							</Typography>
							<Typography color="textSecondary" >
								{post?.titulo}
							</Typography>
						</Box>

					</CardContent>
					<CardActions>
						<Box display="flex" justifyContent="start" ml={1.0} mb={2} >
							<Box mx={2}>
								<Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
									Sim
								</Button>
							</Box>
							<Box>
								<Button onClick={nao} variant="contained" size='large' color="secondary">
									Não
								</Button>
							</Box>
						</Box>
					</CardActions>
				</Card>
			</Box>
		</>
	);
}
export default DeletarPostagem;