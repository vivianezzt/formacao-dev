import { ehAdmin, sub } from "../src/cobertura"

test("Deve testar a função sub", () => {
    expect(ehAdmin(true)).toBe("sim");
})

test("Deve testar a função ehAdmin com true", () => {
    expect(ehAdmin(true)).toBe("sim");
})

test("Deve testar a função ehAdmin com false", () => {
    expect(ehAdmin(false)).toBe("não");
})