/*
6) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array
de arrays, onde cada elemento do array é um outro array contendo o par chave/valor
de um atributo do objeto
*/

function transformaEmArray(objeto){
    let resultado = Object.entries(objeto)
    return resultado
}

const pessoa = { nome: "Ana", idade: 25, id: 234 };
const arrayFinal = transformaEmArray(pessoa)
console.log(arrayFinal) // ["Ana", 25, 234]