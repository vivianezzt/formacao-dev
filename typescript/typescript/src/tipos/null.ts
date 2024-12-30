type UsuarioCompleto = { nome: string, email: string, senha: string }


const usuarios: UsuarioCompleto[] = [
    { nome: 'José', email: 'joazinho@gmail.com', senha: '123456' },
    { nome: 'Maria', email: 'maria@gmail.com', senha: '654321' },
    {nome: "Paulo", email: "paulo@gmail.com", senha: "789654"},
    {nome: "Ana", email: "ana@gmail.com", senha: "456987"},
    {nome: "Jose", email: "jose@gmail.com", senha: "123789"}
]
function buscarPorEmail(email: string): UsuarioCompleto | null {
    const usuario = usuarios.find(u => u.email === email) ?? null
    return usuario
}

console.log(buscarPorEmail("maria@gmail.com"))
console.log(buscarPorEmail("jose@gmail.com"))