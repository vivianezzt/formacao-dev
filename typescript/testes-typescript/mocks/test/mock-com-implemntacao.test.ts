test("Deve adicionar uma implementação ao mock", () => {
    const fn = jest.fn()
    fn.mockImplementation((a,b) => a+b)
    expect(fn(1,1)).toBe(2)
})
test("Deve adicionar uma implemetação ao mock apenas uma vez", () => {
    const fn = jest.fn()
    fn.mockImplementationOnce((a,b)=>a+b)
    expect(fn(1,1)).toBe(2)
    expect(fn(1,1)).toBeUndefined()
})
