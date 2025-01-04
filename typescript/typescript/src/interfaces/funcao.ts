interface OperacaoMatematicaObj {
    fn: (n1: number, n2: number) => number;
}

const somaObj: OperacaoMatematicaObj = {
    fn(n1, n2) {
        return n1 + n2;
    }
}

console.log(somaObj.fn(2, 3)); // 5

interface OperacaoMatematica{
    (n1: number, n2: number): number;
}
// quando se usa uma interface para definir uma função, não é necessário usar a palavra function, 
// mas necessario passar os tipos dos parametros e o tipo de retorno
const soma: OperacaoMatematica = (a: number, b: number) => {
    return a + b;
}
console.log(soma(2, 3)); // 5