abstract class Celular {
    ligar(){
        console.log('Fazendo ligação...');
    }
    abstract acessarRedeMovel(): void;
}
class S24Ultra extends Celular {
    acessarRedeMovel(): void {
        throw new Error("Method not implemented.");
    }
    ligar(){
        console.log('Ligação por comando de voz...');
    }
}

let c1: Celular = new S24Ultra();
c1.ligar();
c1.ligar();

export {}