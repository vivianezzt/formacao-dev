import { Produto } from "../../src/logica";

export class ProdutoBuilder{
    private nome!:string;
    private precoOriginal!:number
    private estoque!:number
    private desconto?:number

    constructor(){
        return this
    }

    public comNome(nome:string){
        this.nome = nome
        return this
    }

    public comPrecoOriginal(preco:number){
        this.precoOriginal = preco
        return this
    }

    public comDesconto(desconto:number){
        this.desconto = desconto
        return this
    }

    public comEstoque(estoque:number){
        this.estoque = estoque
        return this
    }

    public padrao(){
        this.nome = "Produto teste"
        this.precoOriginal = 100
        this.estoque = 5
        return this
    }

    public build(){
        return new Produto(this.nome, this.precoOriginal, this.estoque, this.desconto)
    }
}

