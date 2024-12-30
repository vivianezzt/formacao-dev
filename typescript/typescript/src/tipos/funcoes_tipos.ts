// type OperacaoFn = (a: number, b: number) => number;
// type NumeroOrTexto = number | string;
// let operacao: OperacaoFn;
let operacao: (a: number, b: number) => number;
function somar(n1: number, n2: number): number {
    return n1 + n2;
}

function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}
operacao = somar;
console.log(operacao(3, 7));

operacao = multiplicar;
console.log(operacao(3, 7));