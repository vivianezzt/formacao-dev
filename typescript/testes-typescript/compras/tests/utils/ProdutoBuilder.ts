import { Produto } from "../../src/Produto";

export class ProdutoBuilder{
    comDescontoPercentual(arg0: number) {
      throw new Error("Method not implemented.");
    }
    private nome!: string;
    private desconto!: number;
    private estoque!: number;
    private precoOriginal!: number;

    constructor(){
        return this;
    }
    public comNome(nome: string){
        this.nome = nome;
        return this;
    }
    public comDesconto(desconto: number){
        this.desconto = desconto;
        return this;
    }
    public comEstoque(estoque: number){
        this.estoque = estoque;
        return this;
    }
    public comPrecoOriginal(precoOriginal: number){
        this.precoOriginal = precoOriginal;
        return this;
    }
    public padrao(){
        this.nome = "Produto Teste";
        this.desconto = 100;
        this.estoque = 5;
        this.precoOriginal = 100;
        return this;
    }
    public build(){
        return new Produto(this.nome, this.precoOriginal, this.estoque, this.desconto);
    }
}
