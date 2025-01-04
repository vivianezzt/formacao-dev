/*
2) Escreva uma função que recebe um objeto como primeiro parâmetro e, como
segundo parâmetro, o nome de uma propriedade. Caso a propriedade não exista no
primeiro objeto retorne o objeto original. Caso a propriedade exista, retorne uma cópia
desse objeto sem a propriedade especificada no segundo parâmetro.
*/
function removerAtributo(objeto, atributo){
    if(objeto[atributo]){
        // criar copia do objeto
        let objCopia = {...objeto};
        delete objCopia[atributo];
        return objCopia;
        console.log("Existe o atributo");
    } else {
        return objeto;
    }
}

const pessoa = { nome: "Ana", idade: 30 };
const pessoaAtualizada = removerAtributo(pessoa, "idade");
console.log(pessoa); // { nome: "Ana" }
console.log(pessoaAtualizada); // false