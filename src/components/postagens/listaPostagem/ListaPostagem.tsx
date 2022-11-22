import { Button, Card, CardActions, CardContent, Collapse, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import './ListaPostagem.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 300
			,
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
	}),
);


function ListaPostagem() {

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(-1);

	const handleExpandClick = (i: any) => {
		setExpanded(expanded === i ? -1 : i);
	};


	const [postagem, setPostagem] = useState<Postagem[]>([])
	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	);

	useEffect(() => {
		if (token == "") {
			toast.error('Você precisa estar logade!', {
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

			<Grid container className="backPost">
				{postagem.map((postagem, i) => (
					<Box m={2} className="postagens" >
						<Card className="{classes.root} corCard" variant="outlined">
							<CardContent>
								<Typography variant="h5" component="h2">
									{postagem.titulo}
								</Typography>
								<Typography variant="body1" component="p">
									Postado em: {new Date(Date.parse(postagem.data)).toLocaleDateString()} <br />
								</Typography>
								<Typography variant="subtitle1" component="p">
									{postagem.tema?.descricao}
								</Typography>
								<Typography variant="body2" component="p" >
									<img src={postagem.foto} width="200px" height="190px" />
								</Typography>
								<Typography variant="body1" component="p">
									Postagem por: {postagem.usuario?.nome}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded,
									})}
									onClick={() => handleExpandClick(i)}
									aria-expanded={expanded === i}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton>
							</CardActions>
							<Collapse in={expanded === i} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography variant="body1" component="p">
										{postagem.texto}
									</Typography>
								</CardContent>
							</Collapse>
							<CardActions>
								<Box display="flex" alignItems="center" mb={1.5}>
									<Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
										<Box mx={1} className="boxBotao">
											<Button variant="contained" className="botaoA" size='small'>
												atualizar
											</Button>
										</Box>
									</Link>
									<Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
										<Box mx={1}>
											<Button variant="contained" className="botaoD" size='small'>
												deletar
											</Button>
										</Box>
									</Link>
								</Box>
							</CardActions>
						</Card>
					</Box>
				))}
			</Grid>


		</>
	)
}

export default ListaPostagem;