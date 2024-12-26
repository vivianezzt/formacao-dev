/*
8) Crie uma função que recebe dois arrays como parâmetros e retorna um objeto. As
chaves do objeto serão os elementos do primeiro array passado como parâmetro e os
valores, os elementos do segundo array
*/

function criarObjeto(chaves, valores) {
  let objeto = {};
  for (let i = 0; i < chaves.lenght; i++) {
    objeto[chaves[i]] = valores[i];
  }
  return objeto;
}
const array1 = ["nome", "idade", "profissão", "id"];
const array2 = ["Lucas", 23, "Desenvolvedor", 123];

const objeto = criarObjeto(array1, array2);
console.log(objeto); // { nome: 'Lucas', idade: 23, profissão: 'Desenvolvedor', id: 123 }
