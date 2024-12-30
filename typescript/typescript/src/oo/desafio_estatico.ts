class DasafioEstatico {
    // como acessar um atributo de instância
    nota: number = 9.8
    static notaEstatica: number = 7.9

    static executar(){
        // imprimir o valor de nota no console
        // criar uma nova instância de DesafioEstatico
        const instancia = new DasafioEstatico()
        console.log(instancia.nota)  
        console.log(this.notaEstatica) // A nota é 7.9

    }
}

DasafioEstatico.executar() // À nota é 1000

const outraInstancia = new DasafioEstatico()
console.log(outraInstancia.nota) // A nota é 2000