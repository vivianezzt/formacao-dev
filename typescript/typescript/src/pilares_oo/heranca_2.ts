interface Entidade {
    id: number;
}

interface Vendavel {
    nome: string;
    preco: number;
    desconto: number;
}

class Produto implements Entidade, Vendavel {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
    ) {}
    get precoFinal(){
        return this.preco * (1 - this.desconto)
    }
}
class Servico implements Entidade, Vendavel {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
    ) {}
    get precoFinal(){
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto(123, 'Caneta', 10, 0.05)
console.log(p1)
console.log(p1.precoFinal)

let v1: Vendavel = new Produto(456, 'Caderno', 35, 0.05)
console.log(v1)

v1 = new Servico(789, 'Suporte', 100, 0.1)
console.log(v1)

export {}