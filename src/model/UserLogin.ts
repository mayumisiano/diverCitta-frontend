interface UserLogin
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    deficiencia: string;
    token?: string | null;
}

export default UserLogin;