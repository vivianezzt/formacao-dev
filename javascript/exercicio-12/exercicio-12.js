/* 
2) Escreva uma função que recebe um objeto e que retorna este objeto com uma
chave a mais que contém os metadados do objeto. Esses metadados serão as
quantidades de atributos do tipo string, number, boolean e function que o objeto inicialLista exercicios JS 4
possui. Caso o objeto passado como parâmetro seja vazio, o retorno deve ser um
objeto vazio.
*/
function metadados(objeto){
    let metadados ={
        qtdString: 0,
        qtdNumber: 0,
        qtdBoolean: 0,
        qtdFunction: 0
    }
    let valoresObjeto = Object.values(objeto)
    // percorrer array de valores
    for(valor of valoresObjeto){
        switch(typeof valor){
            case "boolean":
                metadados.qtdBoolean +=1
                break
            case "number":
                metadados.qtdNumber ++
                break
            case "string":
                metadados.qtdString ++
                break
            case "function":
                metadados.qtdFunction ++
                break
        }
    }
    objeto.metadados = metadados
    return objeto
}

const carro = {
    modelo: "Fusion",
    marca: "Ford",
    cor: "preto",
    ano: 2019,
    qtdPortas: 4,
    vidrosEletricos: true,
    seguro: true,
    acelerar: () => console.log("Indo mais rapido"),
    frear: () => console.log("Parando"),
    abrindoVidros: () => console.log("Abrindo vidros")
}
console.log(metadados(carro))