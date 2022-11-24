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
import Container from '@mui/material/Container';

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
	<Container className='back2' >			
						<Box className= 'form1' justifyContent="center">
							<Typography className='botoes' color="textSecondary" gutterBottom>
								     Deseja deletar a Postagem:    
							</Typography>
							<Typography className='botoes' color="textSecondary" >
								{post?.titulo}
							</Typography>
							<Box className='alinhar' display="flex" justifyContent="start" ml={1.0} mb={2} >
								<Box mx={2}>
									<Button className='botao' onClick={sim} variant="contained" size='large'>
									Sim
									</Button>
							</Box>
								<Box>
									<Button className='botao' onClick={nao} variant="contained" size='large'>
									Não
									</Button>
								</Box>
							</Box>
						</Box>			
			</Container>
		</>
	);
}
export default DeletarPostagem;