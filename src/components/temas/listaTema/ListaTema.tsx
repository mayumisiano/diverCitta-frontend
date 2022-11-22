import { Grid } from "@material-ui/core";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../model/Tema";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./ListaTema.css";

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

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

    async function buscaTema() {
        await busca('/temas', setTemas, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        buscaTema()
    }, [temas.length])

    return (
        <>
            {temas.length === 0 && <div className="loader-content"><span className="loader"></span></div>}

            <Grid container className="backTema">
                {temas.map(tema => (
                    <Box m={2} className="listaTemas">
                        <Card variant="outlined" className="cardTemas">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Tema
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box display="flex" mb={1.5}>
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1} className="boxBotao">
                                            <Button
                                                variant="contained"
                                                className="marginLeft botaoA"
                                                size="small">
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="botaoD" size="small">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
                }
            </Grid>
        </>
    );

}

export default ListaTema;