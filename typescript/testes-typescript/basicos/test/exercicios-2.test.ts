import { Utils } from "../src/Utils";

describe("Teste da função diferencaDeArrays", () => {
  test("Deve verificar a diferença entre arrays numéricos", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(Utils.diferencaDeArrays(arr1, arr2)).toEqual([1, 2]);
  });
  test("Deve verificar a diferença entre arrays de string", () => {
    const arr1 = ["a", "b", "c"];
    const arr2 = ["c", "d", "e"];
    expect(Utils.diferencaDeArrays(arr1, arr2)).toStrictEqual(["a", "b"]);
  });
  test("Deve retornar um array vazio se o primeiro array for vazio", () => {
    expect(Utils.diferencaDeArrays([], [1, 2, 3])).toEqual([]);
  });
  test("Deve retornar um array vazio se o segundo array for vazio", () => {
    const arr = [1, 2, 3];
    expect(Utils.diferencaDeArrays(arr, [])).toEqual(arr);
  });
  test("Deve retornar um array vazio se os arrays forem iguais", () => {
    const arr = [1, 2, 3];
    expect(Utils.diferencaDeArrays(arr, arr)).toEqual([]);
  });
//   test("Deve funcionar corretamente com um array de objetos", () => {
//     const arr1 = [{a:1}, {b:2}, {c:3}];
//     const arr2 = [{a:1}];
//     expect(Utils.diferencaDeArrays(arr1, arr2)).toEqual([{a:1}, {b:2}]);
//   })
});
describe("teste da fubção removerDuplicados", () => {
    test("Deve remover os elementos duplicados de um array", () => {
        const arr = [0,1,6.99, -985, 0, 1, 6.99, -985, -80];
        expect(Utils.removerDuplicados(arr)).toEqual([0,1, 6.99, -985, -80]);
    })
    test("Deve remover os elementos duplicados de um array de string", () => {
        const arr = ["a", "b", "c", "a", "b", "c"];
        expect(Utils.removerDuplicados(arr)).toEqual(["a", "b", "c"]);
    })
    test("Deve remover os elementos duplicados de um array de booleanos", () => {
        const arr = [true, false, true, false, true];
        expect(Utils.removerDuplicados(arr)).toEqual([true, false]);
    })
    test("Deve retornar um array vazi se receber um array vazio", () => {
        expect(Utils.removerDuplicados([])).toEqual([]);
    })
})

describe("teste da função capitalizarStrings", () => {
    test("Deve capitalizar uma string em lower case", () => {
        const s = "bom dia"
        expect(Utils.capitalizarString(s)).toBe("Bom Dia");
    })
     test("Deve capitalizar uma string em uppercase", () => {
        const s = "BOM DIA"
        expect(Utils.capitalizarString(s)).toBe("Bom Dia");
    })
     test("Deve capitalizar uma string em case mista", () => {
        const s = "BoM DiA"
        expect(Utils.capitalizarString(s)).toBe("Bom Dia");
    })
     test("Deve capitalizar uma string que contenha números", () => {
        const s = "b01m d14"
        expect(Utils.capitalizarString(s)).toBe("B01m D14");
    })
    test("Deve retornar uma string vazia se receber uma string vazia", () => {
        expect(Utils.capitalizarString("")).toBe("");
    })
    test("Não deve alterar uma string numérica", () => {
        const s = "123 456 789"
        expect(Utils.capitalizarString(s)).toBe(s);
    })
    test("Não deve alterar uma string de caracteres", () => {
        const s = "!@# $%^ &*()"
        expect(Utils.capitalizarString(s)).toBe(s);
    })
})