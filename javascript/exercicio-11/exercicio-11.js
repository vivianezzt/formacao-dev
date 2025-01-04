/*
11) Implemente uma função que recebe um array de objetos e uma propriedade e
ordene o array de acordo com a propriedade

*/
function ordena(arr, propriedade){
    const comparacao = (a,b) => {
        if(a[propriedade] < b[propriedade]){
            return -1
        }else if(a[propriedade] > b[propriedade]){
            return 1
        }else{
            return 0
        }
    }
   return arr.sort(comparacao)

}

const pessoas = [
    { nome: "Viviane", idade: 30 },
    { nome: "Lucas", idade: 22 },
    { nome: "Mariana", idade: 25 },
    { nome: "Julio", idade: 40 }
]

console.log(ordena(pessoas, 'idade')) 
console.log(ordena(pessoas, 'nome'))