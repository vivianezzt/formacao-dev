interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string;
}

interface CasoDeUso {
    executar(entrada: any): any;
}

class RegistrarUsuario implements CasoDeUso {
    executar(usuario: Usuario){
        console.log('Usuário registrado com sucesso!');
        console.log(usuario);
    }
}
const u1: Usuario = {id: 1, nome: 'Viviane', email: 'viviane@zmail.com', senha: '54321'};

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar({id: 1, nome: 'Fulano', email: ''});

export {}