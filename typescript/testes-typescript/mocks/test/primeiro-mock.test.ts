test("Deve criar um mock", () => {
    const fn = jest.fn()
    expect(fn()).toBeUndefined()
})

test("Deve setar o nome do mock", () => {
    const fn = jest.fn()
    const nome = "nova-fn"
    fn.mockName(nome)
    expect(fn.getMockName()).toBe(nome)
})
test("Deve verificar se a função foi chamada", () => {
    const fn = jest.fn()
    fn()
    expect(fn).toHaveBeenCalled()
})

test("Deve verificar se a função retornou", () => {
    const fn = jest.fn()
    fn()
    expect(fn).toHaveReturned()
})
test("Deve verificar se a função não retornou", () => {
    const fn = jest.fn()
    expect(fn).not.toHaveReturned()
})
test("Deve verificar quantas vezes a função foi chamada", () => {
    const fn = jest.fn()
    fn()
    fn()
    expect(fn).toHaveBeenCalledTimes(2)
})
test("Deve verificar quantas vezes a função foi chamada", () => {
    const fn = jest.fn()
    fn()
    fn()
    expect(fn).toHaveReturnedTimes(2)
})