import Postagem from "./Postagem";

interface User
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    deficiencia: string;
    postagem?: Postagem[] //linha adicionada para postagem ter vínculo com user
}

export default User;