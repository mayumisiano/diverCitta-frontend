import { Avatar, Grid, Typography } from '@material-ui/core';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { tokenToString } from 'typescript';
import User from '../../model/User';
import { buscaId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokensReducer';


function Perfil() {

	const userId = useSelector<TokenState, TokenState['id']>(
		(state) => state.id
	)

	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	);

	const [usuario, setUser] = useState<User>({
		id: +userId,
		nome: '',
		usuario: '',
		senha: '',
		foto: '',
		deficiencia: ''
	})

	async function getUserById(id: number) {
		await buscaId(`/usuarios/${id}`, setUser, {
			headers: {
				Authorization: token
			},
		})
	}

	useEffect(() => {
		getUserById(+userId)
	}, [])

	return (
		<>
			<Container>
				<Grid container>
					<Grid xs={6} alignItems="center" justifyContent="center">
						<Avatar src={usuario.foto} alt="foto do usuário x" style={{ width: '15rem', height: '15rem', margin: '0 auto' }} />
						<Typography variant="h5" align="center">{usuario.nome}</Typography>
					</Grid>
					<Grid xs={9} justifyContent="center">
						<Typography variant="h4" align="center">Postagens de {usuario.nome}</Typography>
						Você tem um total de {usuario.postagem?.length} postagens feitas
						{usuario.postagem?.map((postagem) => (
							<p>{postagem.titulo}</p>
						))}
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Perfil;