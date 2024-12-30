interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  data_create?: Date;
  funcao: (a: number, b: number) => boolean;
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: "João",
    email: "joao@zmail.com",
    senha: "123456",
    data_create: new Date(),
    funcao: (a, b) => a > b,
}
console.log(usuarioLogado);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);
console.log(usuarioLogado.senha);
console.log(usuarioLogado.data_create);
console.log(usuarioLogado.funcao(2, 1));
// Partial -> Torna todos os campos opcionais
const usuarioOpcional: Partial<Usuario> = {
    id: 123,
    nome: "José",
    email: "jose@zmail.com",
    senha: "45678"
}
console.log(usuarioOpcional);
console.log(usuarioOpcional.nome);
console.log(usuarioOpcional.email);
console.log(usuarioOpcional.senha);
// Tipos Utilitários do typescritp
// Required -> Torna todos os campos obrigatórios
const Usuariocompleto: Required<Usuario> = {
    id: 123,
    nome: "Thiago",
    email: "thiago@zmail.com",
    senha: "87654",
    data_create: new Date(),
    funcao: (a, b) => a < b,
}
console.log(Usuariocompleto);
console.log(Usuariocompleto.nome);
console.log(Usuariocompleto.email);
console.log(Usuariocompleto.senha);
console.log(Usuariocompleto.data_create);

// Readonly -> Torna todos os campos somente leitura'
const usuarioSomenteLeitura: Readonly<Usuario> = {
    id: 123,
    nome: "Maria",
    email: "maria@zmail.com",
    senha: "",
    funcao: function (a: number, b: number): boolean {
        throw new Error("Function not implemented.");
    }
}
console.log(usuarioSomenteLeitura);
// Omit -> Omitir campos
const usuarioOmitido: Omit<Usuario, "senha"> = {
    id: 123,
    nome: "Ana",
    email: "ana@zmail.com",
    // senha: "123456",
    data_create: new Date(),
    funcao: (a, b) => a > b,
}
console.log(usuarioOmitido);

export {};
