import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { buscaId, deleteId } from "../../../services/Service";
import "./DeletarTema.css";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Tema from "../../../model/Tema";

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
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>Deseja excluir o tema?</Typography>
                            <Typography color="textSecondary">{tema?.descricao}</Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft btnAtualizar" size="large">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size="large" color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarTema;