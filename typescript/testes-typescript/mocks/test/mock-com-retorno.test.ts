test("Deve adicionar um retorno ao mock", () => {
    const fn = jest.fn()
    fn.mockReturnValue(10)
    expect(fn()).toBe(10)
})
test("Deve adicionar um retorno ao mock uma só vez", () => {
    const fn = jest.fn()
    fn.mockReturnValueOnce(10)
    expect(fn()).toBe(10)
    expect(fn()).toBeUndefined()
})
test("Deve verificar se a função retornou um valor", () => {
    const fn = jest.fn()
    fn.mockReturnValueOnce(10)
    fn()
    expect(fn).toHaveReturnedWith(10)  
})
 test("Deve adicionar um valor de resolução na promise", () => {
    const fn = jest.fn()
    fn.mockResolvedValue(10)
    fn()
    expect(fn()).resolves.toBe(10)
 })
  test("Deve adicionar um valor de resolução na promise apenas uma vez", () => {
    const fn = jest.fn()
    fn.mockResolvedValueOnce(10)
    expect(fn()).resolves.toBe(10)
    expect(fn()).toBeUndefined()
 })

  test("Deve adicionar um valor de rejeição na promise", () => {
    const fn = jest.fn()
    fn.mockRejectedValue(10)
    expect(fn()).rejects.toBe(10)
 })
  test("Deve adicionar um valor de resolução na promise apenas uma vez", () => {
    const fn = jest.fn()
    fn.mockRejectedValueOnce(10)
    expect(fn()).rejects.toBe(10)
    expect(fn()).toBeUndefined()
 })