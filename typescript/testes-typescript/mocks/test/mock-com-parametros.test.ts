test("Deve fazer um mock com parâmetros", () => {
    const fn = jest.fn()
    expect(fn("teste", 2,3,{})).toBeUndefined()
})

test("Deve verificar se a função foi chamada com os parametros corretos", () => {
    const fn = jest.fn()
    const p = "teste"
    fn(p)
    expect(fn).toHaveBeenNthCalledWith(1, p)
})

test("Deve verificar se a função não foi chamada com os parametros", () => {
    const fn = jest.fn()
    const p = "teste"
    fn(p)
    expect(fn).not.toHaveBeenNthCalledWith(1, "123")
})

test("Deve verificar se a função foi chamada com um tipo de parametro", () => {
    const fn = jest.fn()
    fn(1,2,3)
    expect(fn).toHaveBeenCalledWith(expect.any(Number), expect.any(Number), expect.any(Number))
})

test("Deve verificar se a função foi chamada com um objeto", () => {
    const fn = jest.fn()
    fn({x:10, y:20})
    expect(fn).toHaveBeenCalledWith(expect.objectContaining({
        x:expect.any(Number),
        y:expect.any(Number)
    }))
})
// como mockar a implementação de uma função e como podemos setar um comportamento de testes