// Desafio produto: definir o tipo do produto com:
// Nome, Preco, Desconto (0-1), Função, PrecoComDesconto

type Produto = { 
    nome: string, 
    preco: number, 
    desconto: number,
    precoComDesconto: () => number

}
let produto: Produto = {
    nome: "Computador",
    preco: 5.900,
    desconto: 0.1,
    precoComDesconto(){
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.precoComDesconto)