class Curso1 {
// modificar o acesso do atributo id
  private _id: number | undefined;
// modificar o acesso do atributo nome
  public nome: string | undefined;
  // obter o valor do id
  get id() {
    return this._id;
  }
  // alterar o valor do id
  set id(id: number | undefined) {
    // garantir que o id é valido
    if ((id ?? 0) > 0) {
      this._id = id;
    }
  }
}

const c1 = new Curso1();
c1.id = 123;
c1.nome = "Curso de TypeScript";
console.log(c1.nome);
console.log(c1.id);
