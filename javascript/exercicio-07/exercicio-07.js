/*
7) Crie uma função que recebe um objeto que representa uma forma geométrica. O
objeto vai ter o tipo da forma e você deve calcular a area da forma de acordo com o
seu tipo. Os tipos disponíveis são: círculo, triângulo e retângulo.

const circuloExemplo = {tipo: "circulo", raio:4.5}
const trianguloExemplo = {tipo: "triangulo", base:4.5, altura:7.8}
const retanguloExemplo = {tipo: "retangulo", base:8.2, altura:8}

Nesta função também é necessário verificar se todos os parêmtros necessários
existem e caso um deles não exista retornar 0.
*/
const circuloExemplo = { tipo: "circulo", raio: 4.5 };
const trianguloExemplo = { tipo: "triangulo", base: 4.5, altura: 7.8 };
const retanguloExemplo = { tipo: "retangulo", base: 8.2, altura: 8 };

function calculaArea(forma) {
  switch (forma.tipo) {
    case "circulo":
      if (forma.raio) {
        area = Math.PI * forma.raio ** 2;
      } else {
        area = 0;
      }
      console.log("Tenho um circulo");
      break;
    case "triangulo":
      if (forma.base && forma.altura) {
        area = (forma.base * forma.altura) / 2;
      } else {
        area = 0;
      }
      break;
    case "retaangulo":
      if (forma.base && forma.altura) {
        area = forma.base * forma.altura;
      } else {
        area = 0;
      }
      console.log("Tenho um retangulo");
      break;
  }
  return area;
}
console.log(calculaArea(circuloExemplo)); // 63.61725123519331
console.log(calculaArea(trianguloExemplo)); // 17.55
console.log(calculaArea(retanguloExemplo)); // 65.6
