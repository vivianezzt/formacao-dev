abstract class Animal {
    abstract emitirSom(): string
}

class Cachorro extends Animal {
    emitirSom(): string {
        return 'Au Au'
    }
}

class Gato extends Animal {
    emitirSom(): string {
        return 'Miau'
    }
}   

function exibir(animal: Animal) {
    console.log(animal.emitirSom())
}

let a: Animal = new Cachorro()
exibir(a)

let b: Animal = new Gato()  
exibir(b)

export {}