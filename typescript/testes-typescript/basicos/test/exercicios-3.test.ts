import { Utils } from "../src/Utils";

describe("Testes da função encontrarPorId", () => {
  const arr = [
    { id: 1, a: 1 },
    { id: 2, b: 2 },
    { id: 3, c: 3 },
  ];
  test("Deve retornar o objeto com o id informado", () => {
    expect(Utils.encontrarPorId(arr, 1)).toEqual({ id: 1, a: 1 });
    expect(Utils.encontrarPorId(arr, 2)).toEqual({ id: 2, b: 2 });
    expect(Utils.encontrarPorId(arr, 3)).toEqual({ id: 3, c: 3 });
  });
  test("Deve retornar undefined se o id nao for encontrado", () => {
    expect(Utils.encontrarPorId(arr, 100)).toBeUndefined();
  });
  test("", () => {
    Utils.encontrarPorId([], 1);
    Utils.encontrarPorId([{a:1}], 1);
    Utils.encontrarPorId([true, false], 1);
  })
});
describe("Testes da função inverterObjeto", () => {
    test("Deve retornar um objeto vazio se o objeto informado for vazio", () => {
        expect(Utils.inverterObjeto({})).toEqual({});
    })
    test("Deve inverter propriedades com valores primitivos", () => {
        const obj = {nome: "Ana", idade: 30, salario: 5890.90, admin: true}
        expect(Utils.inverterObjeto(obj)).toEqual({
            Ana: "nome",
            "30": "idade",
            "5890.9": "salario",
            "true": "admin"
        })
    })
    test("Deve inverter propriedades com arrays e objetos", () => {
        const obj = {array:[1,2,"a","b"], obj: {a:1}}
        expect(Utils.inverterObjeto(obj)).toEqual({
            "[1,2,\"a\",\"b\"]": "array",
            "{\"a\":1}": "obj"
        })
    })
})
describe("Testes da função deletarPropriedade", () => {
  test("Deve deletar a propriedade informada de um objeto", () => {
    const obj = {nome: "Alice", admin: true}
    expect(Utils.deletarPropriedade(obj, "admin")).toEqual({nome: "Alice"})
})
test("Deve deletar a propriedade informada de um array", () => {
    const obj = {nome: "Alice", array: [1,2,3]}
    expect(Utils.deletarPropriedade(obj, "array")).toEqual({nome: "Alice"})
})
test("Deve deletar a propriedade objeto de um objeto", () => {
    const obj = {nome: "Alice", admin: {pagina: "pagina.com", status: "ativo"}}
    expect(Utils.deletarPropriedade(obj, "admin")).toEqual({nome: "Alice"})
})
test("Deve retornar um objeto vazio se o objeto passado for vazio", () => {
    expect(Utils.inverterObjeto({})).toEqual({})
})
test("Deve retornar um objeto original se a propriedade não existir", () => {
    const obj = {nome: "Alice", idade: 30}
    expect(Utils.deletarPropriedade(obj, "endereco")).toEqual(obj)
})
})