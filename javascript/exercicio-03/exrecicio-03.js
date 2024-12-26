/*
3) Crie uma função que recebe um objeto como parâmetro e retorna um segundo
objeto com as chaves e valores do primeiro objeto invertidas
*/

function trovaChaveValor(objeto){
    let objetoRetorno = {}
    // identificar chave e valor
    let conteudoObjeto = Object.entries(objeto)
    for(par of conteudoObjeto){
        objetoRetorno[par[1]] = par[0]
    }
    return objetoRetorno

}
const objeto = {nome: "Maria", idade: "45", id: "87645"}

const objetoInvertido = trovaChaveValor(objeto)

console.log(objeto) // {Maria: "nome", 45: "idade", 87645: "id"}
console.log(objetoInvertido)