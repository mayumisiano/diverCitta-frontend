import { makeStyles } from '@material-ui/core';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../model/User';
import { busca, buscaId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css';

function Perfil() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  const userId = useSelector<TokenState, TokenState['id']>(state => state.id);

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    deficiencia: '',
  });

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUser, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <>
      <div className="back2p">
        <Container>
          <div className="perfilContainer">
            <Grid
              xs={3}
              alignItems="center"
              justifyContent="center"
              className="perfil"
            >
              <img src={user.foto} alt="" className="imgPerfil" />
              <Typography variant="h5" align="center">
                {user.nome} <br />
                <br />
                Deficiência: {user.deficiencia} <br />
                <br />
                Contato: {user.usuario}
              </Typography>
            </Grid>
            <Grid xs={9} justifyContent="center" className="perfil">
              <Typography variant="h4" align="center">
                Postagens de {user.nome}
              </Typography>
              <Typography align="center">
                <br />
                Você tem um total de {user.postagem?.length} postagens
                publicadas:
              </Typography>
              <div className="postUser">
                {user.postagem?.map(post => (
                  <div className="postPerfil">
                    <h3>{post.titulo}</h3>

                    <Typography variant="body2" component="p">
                      <img src={post.foto} width="200px" height="190px" />
                    </Typography>

                    <p>{post.texto}</p>
                    <strong> Tema: {post.tema?.descricao}</strong>
                  </div>
                ))}
              </div>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Perfil;
