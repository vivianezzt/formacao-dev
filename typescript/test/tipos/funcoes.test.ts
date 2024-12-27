import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudação baseada na hora atual', () => {
    const s = saudacao('Viviane');
    expect(s).toBe('Olá Viviane! Passar Bem');
})

test('Deve retornar a multiplicação de dois números', () => {
    const resultado = multiplicar(2, 3);
    expect(resultado).toBe(6);
})

test('Deve retornar um NaN comparamêtro do tipo string', () => {
    const resultado = multiplicarPerigosa("a",5);
    expect(resultado).toBeNaN();
})

