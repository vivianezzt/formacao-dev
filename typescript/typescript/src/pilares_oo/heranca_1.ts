interface Entidade {
    id: string
}
interface Vendavel extends Entidade {
    preco: number
    desconto: number
}
interface EntidadeComDatas extends Entidade {
    criadoEm?: Date
    atualizadoEm: Date
    excluidoEm?: Date
}
interface Usuario extends EntidadeComDatas {
    nome: string
    email: string
    senha?: string
}
interface Produto extends Vendavel, EntidadeComDatas {
    // nome: string
    // descricao: string
    // quantidade: number
}
const u1: Usuario = {
    id: 'nanbciabcjncmna445ff-bjhgquydiqqsssmjep4anxll',
    nome: 'João',
    email: 'joao@zmail.com',
    criadoEm: new Date(),
    atualizadoEm: new Date()
}

console.log(u1)
const p1: Produto = {
    id: 'nanbciabcjncmna445ff-bjhgquydiqqsssmjep4anxll',
    preco: 100,
    desconto: 0.1,
    criadoEm: new Date(),
    atualizadoEm: new Date()
}
console.log(p1)
export {}