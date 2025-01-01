beforeAll(() => {
    console.log("Antes de tudo")
})

beforeEach(() => {
    console.log("Antes de cada teste")
})
test("Deve executar1", () => {
    console.log("1")
    expect(1).toBe(1)
})

test("Deve executar2", () => {
    console.log("2")
    expect(2).toBe(2)
})

afterEach(() => {
    console.log("Depois de cada teste")
})

afterAll(() => {
    console.log("Depois de tudo")
})