let nota: number | string = 10
nota = "A+"

console.log(`Minha nota é ${nota}`)

type NotaOuConceito = number | "A" | "B" | "C" | "D" | "E" | "F"


let n1: NotaOuConceito = 10
n1 = "C"

console.log(n1)

function imprimirNota(nota: NotaOuConceito){
    if(typeof nota === "number"){
        console.log(`A nota é ${nota}`)
    }else{
        console.log(`O conceito é ${nota}`)
    }
}
n1 = 9.5
imprimirNota(n1)