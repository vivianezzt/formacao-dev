/* 
10) Crie um programa que gera um CPF válido
*/

function digitosAleatorios(){
    let numerosAleatorios = []  
    for(let i = 0; i < 9; i++){
        let numero = Math.random() * 9;
        numerosAleatorios.push(Math.trunc(numero))
    }
    return numerosAleatorios
}

function primeiroDigito(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i] * (10 - i)
    }
    const resto = soma % 11;
    const digitoVerificador = resto > 1 ? 11 - resto : 0;
    return [...arr, digitoVerificador]
}
function segundoDigito(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i] * (11 - i)
    }
    const resto = soma % 11;
    const digitoVerificador = resto > 1 ? 11 - resto : 0;
    return [...arr, digitoVerificador]

}

const cpfAleatorio = digitosAleatorios();
const cpfPrimeiraVerificacao = primeiroDigito(cpfAleatorio);
const cpfSegundaVerificacao = segundoDigito(cpfPrimeiraVerificacao);    
console.log(cpfSegundaVerificacao)