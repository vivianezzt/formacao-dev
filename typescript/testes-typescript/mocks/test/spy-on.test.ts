import Calculadora from "../src/Calculadora";
import {mult, div} from "../src/Calculadora";
import Pessoa from "../src/Pessoa";
const ClacAux = {mult, div}

test("Deve espionar a função soma", () => {
    jest.spyOn(Calculadora, 'soma') // não altera a implementação da função
    expect(Calculadora.soma(1,1)).toBe(2)
    expect(Calculadora.soma).toHaveBeenCalled()
    expect(Calculadora.soma).toHaveBeenCalledWith(1,1)
})

test("Deve mockar a função soma", () => {
    jest.spyOn(Calculadora, 'soma').mockReturnValue(10)
    expect(Calculadora.soma(1,1)).toBe(10)
})
test("Deve mockar a implementação da função soma", () => {
    jest.spyOn(Calculadora, 'soma').mockImplementation((a:number, b: number) => a+b+1)
    expect(Calculadora.soma(1,1)).toBe(3)
    const resultado = Calculadora.sub(1,1)
    expect(resultado).toBe(0)
})

test("Deve mockar a função div de calcAux", () => {
    jest.spyOn(ClacAux, "div").mockReturnValue(1)
    expect(ClacAux.div(100,1)).toBe(1)
})

test("Deve mockar uma função de uma pessoa", () => {
    const p = new Pessoa("Ana", 10)
    jest.spyOn(p, "seApresentar").mockReturnValue("oi")
    expect(p.seApresentar()).toBe("oi")
})