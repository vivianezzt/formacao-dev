interface Flexivel {
    nome: string
    [atributo: string]: any
}

const f1: Flexivel = {
    nome: "José",
    idade: 30,
    salario: 10.000,
    deps: [{}]
}
console.log(f1);

export {}