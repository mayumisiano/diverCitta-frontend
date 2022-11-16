import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined,
    });
    navigate('/login');
  }

  var navbarComponent;

  if (token != '') {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              DiverCitta
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Link to="/sobre-nos" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Sobre Nós
                </Typography>
              </Box>
            </Link>

            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
