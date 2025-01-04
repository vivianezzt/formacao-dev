test("Deve verificar se uma string é 'abc'", () => {
    expect("abc").toBe("abc");
    expect("abc").toMatch("abc")
});

test("Deve verificar se a string começa 'abc'", () => {
    expect ("abc123abc").toMatch(/^abc/)
})

test("Deve verificar se a string não começa'abc'", () => {
    expect("ac123abc").not.toMatch(/^abc/)
})

test("Deve verificar se uma string constem uma substring", () => {
    expect("abc123").toContain("c12")
})

test("Deve verificar se uma string não constem uma substring", () => {
    expect("abc23").not.toContain("c12")
})