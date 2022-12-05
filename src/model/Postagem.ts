import Tema from './Tema'
import User from './User';

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    foto: string;
    data: string;
    tema?: Tema | null
    usuario?: User | null //linha adicionada p/ vincular usuário
}

export default Postagem;