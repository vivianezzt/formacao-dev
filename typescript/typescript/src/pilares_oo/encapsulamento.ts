class Carro {
    private velocidadeAtual: number = 0
    protected readonly velocidadeMaxima: number = 200
    
    constructor(public nome: string){}
    get velocidade(){
        return this.velocidadeAtual
    }

    alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta
        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }
    acelerar(){
        this.alterarVelocidade(5)
    }

}
 const c1 = new Carro('Fusca')
    // console.log(c1.velocidadeAtual)
    // console.log(c1.velocidadeMaxima)
    c1.alterarVelocidade(50)
    console.log(c1.nome)
    console.log(c1.velocidade)


export {}
