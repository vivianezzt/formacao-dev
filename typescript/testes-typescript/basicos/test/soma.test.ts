import { soma } from "../src/soma";

test("Deve testar a função soma", () => {
    const resultado = soma(1, 2);
    expect(resultado).toBe(3);
});

test("Deve fazer a soma com numeros positivos", () => {
    expect(soma(2,3)).toBe(5);
})

test("Deve fazer a soma com numeros negativos", () => {
    expect(soma(-2,-3)).toBe(-5);
})
it("should test the function with it", () => {
    expect(soma(1,1)).toBe(2);
})
