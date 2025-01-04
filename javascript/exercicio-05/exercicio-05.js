/*
5) Dados dois arrays de números [a,b] e [d,e] crie uma função que faça a multiplicação
do primeiro array com o segundo de maneira distributiva e a imprima na tela, ou seja,
(a*d), (a*e),(b*d) (d*e). A função deve ser capaz de receber como parâmetros arrays de
qualquer tamanho e não só com dois parâmetros.
*/
function multiplicacaoDistributiva(array1, array2){
   for(let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; j++){
         console.log(`${array1[i]} * ${array2[j]} = ${array1[i] * array2[j]}`)
      }
   }

}
const array1 = [1,3,5,2,4,7,9]
const array2 = [90, 100]

multiplicacaoDistributiva(array1, array2) // 90, 100, 270, 300, 450, 500