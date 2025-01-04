test("Deve verificar se um valor é outro valor", () => {
  // tobe usado para verificar se um valor é igual a outro
  expect(10).toBe(10);
});

test("Deve verificar se um valor é diferente de outro valor", () => {
  // not.tobe verifica se um valor é diferente de outro
  expect(10).not.toBe(20);
});

test("deve verificar se um valor é nulo", () => {
  expect(1).not.toBe(null);
  expect(1).not.toBeNull();
});
test("deve verificar se um valor é definido", () => {
  expect(3).toBeDefined()
  expect(3).not.toBe(undefined)
});

test("Deve verificar se um valor esta indefinido", () => {
  expect(undefined).toBeUndefined();
  expect(3).not.toBeUndefined();
});

test("Deve verificar se um valor é falso (falsy)", () => {
  expect(false).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(NaN).toBeFalsy();
  expect(-0).toBeFalsy();
  expect(1).not.toBeFalsy();
});

test("Deve verificar se um valor é verdadeiro (truthy)", () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect(" ").toBeTruthy();
  expect(0).not.toBeTruthy();
  expect(false).not.toBeTruthy();
  expect(null).not.toBeTruthy();
  expect(undefined).not.toBeTruthy();
  expect(NaN).not.toBeTruthy();
  expect(-0).not.toBeTruthy();
});
test("Deve verificar se um valor é truthy", () => {
    expect(4).toBeTruthy();
    expect(-13).toBeTruthy();
    expect("oi").toBeTruthy();
})