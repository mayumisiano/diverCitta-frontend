import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { buscaId, deleteId } from "../../../services/Service";
import "./DeletarTema.css";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Tema from "../../../model/Tema";
import Container from '@mui/material/Container';

function DeletarTema() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [tema, setTema] = useState<Tema>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logade!", {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }


    function sim() {
        navigate("/temas")
        deleteId(`/temas/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success("Tema deletado!", {
            position: "top-right",
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
        navigate("/temas");
    }

    return (
        <>
        <Container className='back2' >			
                            <Box className= 'form1' justifyContent="center">
                                <Typography className='botoes' color="textSecondary" gutterBottom>
                                         Deseja excluir o Tema:    
                                </Typography>
                                <Typography className='botoes' color="textSecondary" >
                                   
                                </Typography>
                                <Box className='alinhar' display="flex" justifyContent="start" ml={1.0} mb={2} >
                        <Box className='alinhar' display="flex" justifyContent="start" ml={1.0} mb={2}>
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
                        </Box>	
			</Container>
		</>
    );
}



export default DeletarTema;