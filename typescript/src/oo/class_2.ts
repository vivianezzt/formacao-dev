class Curso {
//garantir a constância do id sem deixa-lo privado
// readonly id: number;
// modificar o acesso do atributo nome
// public nome: string | undefined;
  
  constructor(readonly id: number, public nome?: string){
    this.id = id;
    if(id < 1) throw new Error("Id inválido");
  }
}

const c1 = new Curso(123);
c1.nome = "Curso de TypeScript";
console.log(c1.id);
console.log(c1.nome);

const c2 = new Curso(456, "Typescript avançado");
console.log(c2.id);

export {}