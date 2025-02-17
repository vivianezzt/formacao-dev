jest.mock("../src/Calculadora", () => {
   const original = jest.requireActual("../src/Calculadora")
   console.log(original)
   return {
    ...original,
    soma: jest.fn().mockReturnValue(10),
    sub: jest.fn()
   }
})

import { mult, soma, sub } from "../src/Calculadora"
test("Deve testar a somna", () => {
    expect(soma(1,2)).toBe(10)
})
test("Deve testar a subtração", () => {
    expect(sub(1,2)).toBeUndefined()
})
test("Deve testar a multiplicação", () => {
    expect(mult(2,2)).toBe(4)
})