test("Deve criar um mock da classe pessoa através de uma função construtora", () => {
  const pessoaMock = jest.fn().mockImplementation(() => {
    return {
      seApresentar: jest
        .fn()
        .mockReturnValue("Olá, meu nome é Viviane e tenho 40 anos"),
      celebrarAniversario: jest.fn(),
      maiorDeIdade: jest.fn().mockReturnValue(true),
    };
  });
  const novaPessoa = new pessoaMock("Viviane", 40);
  expect(novaPessoa.maiorDeIdade()).toBe(true);
  expect(novaPessoa.seApresentar()).toBe(
    "Olá, meu nome é Viviane e tenho 40 anos"
  );
});

import Pessoa from "../src/Pessoa";
jest.mock("../src/Pessoa");

// test("Deve criar um mock usando jest.mock", () => {
//     const pessoa = new Pessoa("Ana", 10)
//     expect(Pessoa).toHaveBeenCalledWith("Ana", 10)
//     pessoa.celebrarAniversario = jest.fn().mockReturnValue("oi")
//     console.log(pessoa.celebrarAniversario())
//     expect(pessoa.celebrarAniversario).toHaveBeenCalled()
// })

jest.mock("../src/Pessoa", () => {
  return jest.fn().mockImplementation(() => {
    return {
      seApresentar: jest
        .fn()
        .mockReturnValue("Olá, meu nome é Viviane e tenho 40 anos"),
      celebrarAniversario: jest.fn(),
      maiorDeIdade: jest.fn().mockReturnValue(true),
    };
  });
});
test("Deve criar um mock com a função factory e jest.mock", () => {
    const pessoa = new Pessoa("Ana", 10)
    expect(Pessoa).toHaveBeenCalledWith("Ana", 10)
    expect(pessoa.celebrarAniversario()).toBe(undefined)
    expect(pessoa.seApresentar()).toBe("Olá, meu nome é Viviane e tenho 40 anos")
})