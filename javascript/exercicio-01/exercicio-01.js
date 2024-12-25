/*
1) Uma professora tem que entregar as notas dos alunos. Cada aluno tem quatro
matérias e quatro notas em cada:

E essa entrega tem que ser feita de diferentes maneiras
1 - Para diretoria ela deve entregar um objeto com o nome do aluno e as médias desse
aluno em cada uma das matérias
2 - Para aluno ela deve entregar um objeto com o nome do aluno e se o aluno foi
aprovado, reprovado ou está de recuperação em cada matéria que cursou. (nota >
7 ⇒ aprovado; nota < 7 e ≥ 5 ⇒ recuperação, nota < 5 ⇒ reprovado)
3 - Para os pais do aluno ela deve dizer apenas se o aluno foi aprovado, reprovado ou se
está de recuperação. Se o aluno for aprovado em todas as matérias, ele estáLista exercicios JS 2
aprovado, se ficou de recuperação em uma ou duas matérias e está aprovado nas
outras duas, está de recuperação caso contrário, está reprovado.

*/

function entregaPraDiretoria(aluno) {
  let objRetorno = {
    nome: aluno.nome,
    materias: [],
  };
  // percorrer o array de materias
  for (materia of aluno.materias) {
    // variável acumuladora para a média
    let acc = 0;
    for (nota of materia.notas) {
      acc = acc + nota;
    }
    // salvar o calculo da média no objeto de retorno - push adiciona um novo elemento no array
    objRetorno.materias.push({
      nome: materia.nome,
      media: acc / 4,
    });
    console.log(`A Média é ${acc/4}`);
  }
  return objRetorno;
}

function entregaProAluno(aluno){
    let alunoComnMedia = entregaPraDiretoria(aluno);
    let objRetorno = {
        nome: aluno.nome,
        materias: []
    }
    for(materia of alunoComnMedia.materias){
        let conceito ;
        if(materia.media >= 7){
            conceito = "Aprovado";
        } else if(materia.media < 7 && materia.media >= 5){
            conceito = "Recuperação";
        } else {
            conceito = "Reprovado";
        } 
        objRetorno.materias.push({
            nome: materia.nome,
            conceito: conceito
        });
    }
    return objRetorno;
}

function entregaProsPais(aluno){
    let alunoComConceito = entregaProAluno(aluno);
    let conceitos = [];
    for(materia of alunoComConceito.materias){
        conceitos.push(materia.conceito);
    } 
    if(conceitos.includes("Reprovado")){
        return "REPROVADO ";
    } else if(!conceitos.includes("REPROVADO") && !conceitos.includes("RECUPERAÇÃO")){
        return "APROVADO";
    } else {
        let indiceAprovado = conceitos.indexOf("APROVADO");
        let ultimoIndiceAprovado = conceitos.lastIndexOf("APROVADO");
        if(indiceAprovado != ultimoIndiceAprovado){
            return "RECUPERAÇÃO";
        } else {
            return "REPROVADO";
        }
    }
}

const joazinho = {
  nome: "Joaozinho",
  materias: [
    {
      nome: "Português",
      notas: [7.4, 5.6, 10, 9],
    },
    {
      nome: "Matemática",
      notas: [4.4, 5.0, 8.2, 7.0],
    },
    {
      nome: "Ciências",
      notas: [8.2, 7.6, 8.0, 6.3],
    },
    {
      nome: "Estudos Sociais",
      notas: [9.2, 7.6, 8.5, 7.0],
    },
  ],
};
console.log(entregaPraDiretoria(joazinho));
console.log(entregaProAluno(joazinho));
console.log(entregaProsPais(joazinho));