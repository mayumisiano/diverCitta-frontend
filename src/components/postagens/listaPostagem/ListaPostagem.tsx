import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './ListaPostagem.css';

function ListaPostagem() {
	const [postagem, setPostagem] = useState<Postagem[]>([])
	let navigate = useNavigate();
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

	async function getPost() {
		await busca("/postagens", setPostagem, {
			headers: {
				'Authorization': token
			}
		})
	}

	useEffect(() => {

		getPost()

	}, [postagem.length])

	return (
		<>		
			{postagem.length === 0 && <div className="loader-content"><span className="loader"></span></div>}

			<Box display="flex" flex="wrap">
			
			{postagem.map(postagem => (
				<Box m={2} >
					<Card className="postagens" variant="outlined">
						<CardContent>
							{/* <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography> */}
							<Typography variant="h5" component="h2">
								{postagem.titulo}
							</Typography>
							<Typography variant="body2" component="p">
								{postagem.texto}
							</Typography>
							<Typography variant="body2" component="p">
								Postado em: {new Date(Date.parse(postagem.data)).toLocaleDateString()} <br />
								{/* Mostar data e hora: {new Date(Date.parse(postagem.data)).toLocaleString()} <br />
              Mostrar apenas hora: {new Date(Date.parse(postagem.data)).toLocaleTimeString()} */}
							</Typography>
							<Typography variant="body2" component="p">
								{postagem.tema?.descricao}
							</Typography>

							<Typography variant="body2" component="p">
                                <img src={postagem.foto} alt="Imagem o Post" width="200px" height="200px"/> 
                            </Typography>

						</CardContent>
						<CardActions>
							<Box display="flex" justifyContent="center" mb={1.5}>

								<Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
									<Box mx={1}>
										<Button variant="contained" className="marginLeft" size='small' color="primary" >
											atualizar
										</Button>
									</Box>
								</Link>
								<Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
									<Box mx={1}>
										<Button variant="contained" size='small' color="secondary">
											deletar
										</Button>
									</Box>
								</Link>
							</Box>
						</CardActions>
					</Card>
				</Box>
			))}
			</Box>
		</>
		)
}

export default ListaPostagem;