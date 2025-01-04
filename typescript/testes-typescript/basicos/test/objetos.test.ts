test("Deve verificar se dois objetos são iguais", () => {
    expect({a:1, b:2}).toEqual({a:1, b:2})
})
test("Deve verificar se dois objetos são iguais mesmo com propriedades indefinidas", () => {
    expect({a:1, b:undefined}).toEqual({a:1})
})

test("Deve verificar se dois objetos são iguais de forma estrita", () => {
    expect({a:1, b:undefined}).not.toStrictEqual({a:1})
    expect({a:1, b:undefined}).toStrictEqual({a:1, b:undefined})
})
test("Deve verificar se um objeyo possui uma propriedade", () => { 
    const obj = {nome: "Alice", idade: 30}
    expect(obj).toHaveProperty("nome")
    expect(obj).toHaveProperty("idade")
})
test("Deve verificar se um objeto não possui uma propriedade", () => {
    const obj = {}
    expect(obj).not.toHaveProperty("nome")
})
test("Deve verificar se um objeto possui um subset de campos", () => {
    const obj = {nome: "Alice", idade: 30, cidade: "São Paulo"}
    expect(obj).toMatchObject({nome: "Alice", idade: 30})
})
test("Deve verificar se um objeto não possui um subset de campos", () => {
    const obj = {nome: "Alice", idade: 30, cidade: "São Paulo"}
    expect(obj).not.toMatchObject({nome: "Alice", endereco: "Rua A"})
})
test("deve verificar se um objeto é uma instancia de uma classe", () => {
    class Pessoa {
        constructor(public nome: string, idade: number) {}
    }
    const p = new Pessoa("Alice", 30)
    expect(p).toBeInstanceOf(Pessoa)
})
