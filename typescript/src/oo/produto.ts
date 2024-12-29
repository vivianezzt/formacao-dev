// Produto (id, nome, preco, desc, precoFinal)

import Validador from "./validador";

class Produto {
    constructor(
        readonly id: number, 
        public nome: string, 
        public preco: number, 
        public desc: number = 0,
    ){  
        Validador.maiorQueZero(id, 'Id inválido');
        Validador.tamanhoEntre(nome, 2, 250, 'Nome inválido');
        // if(id <= 0) throw new Error("Id inválido");
        // if(nome.length < 2) throw new Error("Nome insuficiente");
        // if(nome.length > 250) throw new Error("Nome muito grande");
        Validador.maiorQueZero(preco, 'Preço inválido');    
        // if(preco <= 0) throw new Error("Preço inválido");
        Validador.entre(desc, 0, 0.8, 'Desconto inválido');
        // if(desc < 0 && desc > 0.8) throw new Error("Desconto inválido");
    }
    get precoFinal() {
        return this.preco * (1 - this.desc);
    }
}

const p1 = new Produto(1, "Caneta", 4.20, 0.5);
console.log(p1.nome, p1.precoFinal);

const p2 = new Produto(2, "Notebook", 7.500, 0.05);
console.log(p2);

console.log(Validador.ERRO_DESCONBECIDO)
export {}