import { Pedido, Produto, Usuario } from "../../src/logica";

export class UsuarioBuilder {
    private email!: string
    private senha!: string
    private historicoPedidos: Pedido[] = []
    private id?: string

    constructor(){
        return this
    }

    comEmail(email: string){
        this.email = email
        return this
    }
        comSenha(senha: string){
        this.senha = senha
        return this
    }
        comId(id: string){
        this.id = id
        return this
    }
        comHistoricoPedidos(historicoPedidos: Pedido[]){
        this.historicoPedidos = historicoPedidos
        return this
    }
        padrao(){
        this.email = "oi@mail.com"
        this.senha = "123456"
        return this
    }
    build(){
        return new Usuario(this.email,this.senha, this.historicoPedidos, this.id )
    }

}