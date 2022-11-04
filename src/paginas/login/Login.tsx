import React from 'react';
import './Login.css';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className="textos1"
            >
              Cadastre-se
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;

//Linha 7: Onde aparecerá todos os conteúdos na tela
//Linha 8: É o container
//Linha 9: Item do Grid container, vai ficar o formulário (texto,long,senha,botão)
//Linha 64: Items do Grid container, vai ficar a imagem(imagem e campos)
//Linha 11: Criação do Formulário
//Linha 12: Typography > onde serão colocados os textos (entrar)
//Linha 22: Textfield > entrada de texto (usuario)
//Linha 30: Textfield > entrada de texto(senha)
//Linha 40: Link que inclui a rota
