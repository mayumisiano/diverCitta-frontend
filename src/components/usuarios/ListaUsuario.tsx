import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../model/User';
import { busca } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokensReducer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import './ListaUsuario.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
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
  })
);

function ListaUsuario() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);

  const handleExpandClick = (i: any) => {
    setExpanded(expanded === i ? -1 : i);
  };

  const [user, setUser] = useState<User[]>([]);
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logade!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'light',
        progress: undefined,
      });
      navigate('/login');
    }
  }, [token]);

  async function getPost() {
    await busca('/usuarios/all', setUser, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [user.length]);

  return (
    <>
      {user.length === 0 && (
        <div className="loader-content">
          <span className="loader"></span>
        </div>
      )}
      <div className="intropagina">
        <h1 id="titulo">NOSSOS DIVERCITTERS</h1>
        <Grid container className="backPost">
          {user.map((user, i) => (
            <Box m={2} className="postagens">
              <Card className="{classes.root} corCard" variant="outlined">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className="card-title"
                  >
                    {user.nome}
                    <br />
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    <img src={user.foto} width="200px" height="190px" />
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
                      <h2 className="informacao">Informações do usuário:</h2>
                      <br />
                      Contato: {user.usuario}
                      <br />
                      <br />
                      Deficiência: {user.deficiencia}
                      <br />
                      <br />
                      {user.nome} possui um total de {user.postagem?.length}{' '}
                      postagens publicadas:
                      <div className="postUser">
                        {user.postagem?.map(post => (
                          <div className="postPerfil">
                            <h3>{post.titulo}</h3>

                            <strong> Tema: {post.tema?.descricao}</strong>
                          </div>
                        ))}
                      </div>
                    </Typography>
                  </CardContent>
                </Collapse>
                <CardActions></CardActions>
              </Card>
            </Box>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default ListaUsuario;
