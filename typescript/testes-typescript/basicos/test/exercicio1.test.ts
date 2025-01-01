import { Utils } from "../src/Utils";
describe("Testes da função max", () => {
  test("Deve retornar nul se receber m array vazio", () => {
    const resposta = Utils.max([]);
    // expect(Utils.max([])).toBeNull();
    expect(resposta).toBeNull();
  });

  test("Deve retornar o maior número do array", () => {
    const resposta = Utils.max([1, 2, 3, 4, 5]);
    expect(resposta).toBe(5);   
  });
});
