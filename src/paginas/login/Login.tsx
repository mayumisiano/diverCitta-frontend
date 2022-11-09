import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { api, login } from '../../services/Service';
import UserLogin from '../../model/UserLogin';
import { Box } from '@mui/material';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
          id: 0,
          nome: '',
          usuario: '',
          foto:'',
          senha: '',
          token:''
      }
      )

      function updatedModel(e: ChangeEvent<HTMLInputElement>) {

          setUserLogin({
              ...userLogin,
              [e.target.name]: e.target.value
          })
      }

      //Arrow function
      useEffect(()=> {
          if(token != ''){
              navigate('/home')
          }
      }, [token])

      async function onSubmit(e: ChangeEvent<HTMLFormElement>){
          e.preventDefault();
          try{
              await login(`/usuarios/logar`, userLogin, setToken)
              alert('Usuário logado com sucesso!')
          } catch(error){
              alert('Dados do usuário inconsistentes. Erro ao logar!')
          }
      }

  return (
      <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid alignItems='center' xs={6}>
              <Box paddingX={20}>
                  <form onSubmit={onSubmit}>
                      <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                      <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                      <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                      <Box marginTop={2} textAlign='center'>                            
                              <Button type='submit' variant='contained' color='primary'>
                                  Logar
                              </Button>                            
                      </Box>
                  </form>
                  <Box display='flex' justifyContent='center' marginTop={2}>
                      <Box marginRight={1}>
                          <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                      </Box>
                      <Link to='/cadastrousuario'>
                          <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                      </Link>
                          
                  </Box>
              </Box>
          </Grid>
          <Grid xs={6} style={{
              backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
              backgroundRepeat: 'no-repeat', width: '100vh', minHeight:'100vh', backgroundSize: 'cover', backgroundPosition:'center'
          }}>
          </Grid>
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
