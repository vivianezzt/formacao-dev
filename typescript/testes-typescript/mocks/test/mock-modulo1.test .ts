jest.mock("../src/Calculadora", () => {
   const original = jest.requireActual("../src/Calculadora")
   console.log(original)
   return {
    __esModule: true,
    default: {
        ...original.default,
    soma: jest.fn().mockReturnValue(10),
    sub: jest.fn()
    }
    
   }
})

import Calculadora from "../src/Calculadora"

test("Deve testar a somna", () => {
    expect(Calculadora.soma(1,2)).toBe(10)
})
test("Deve testar a subtração", () => {
    expect(Calculadora.sub(1,2)).toBeUndefined()
})
test("Deve testar a multiplicação", () => {
    expect(Calculadora.mult(2,2)).toBe(4)
})