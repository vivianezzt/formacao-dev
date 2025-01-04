test("Deve verificar se dois arrays são iguais", () => {
  const arr1 = [1, 2, 3]; // compara a posição de memória
  const arr2 = [1, 2, 3];
  expect(arr1).toEqual(arr2);// compara o conteúdo e não o endereco de memória
});

test("Deve verificar se dois arrays são iguais de forma estrita", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toStrictEqual(arr2);
});

test("Deve verificar se dois arrays não são iguais", () => {
  const arr1 = [1, 2, 3]; // compara a posição de memória
  const arr2 = [4, 5, 6];
  expect(arr1).not.toEqual(arr2);
});

test("Deve verificar se dois arrays não são iguais de forma estrita", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(arr1).not.toStrictEqual(arr2);
});

test("Deve verificar se um array contém um elemnto específico", () => {
    const arr = ["Maça", "Banana", "Pera"];
    expect(arr).toContain("Banana")
})
test("Deve verificar se um array não contém um elemnto específico", () => {
    const arr = ["Maça", "Banana", "Pera"];
    expect(arr).not.toContain("Limão")
})
test("Deve verificar o tamnho do array", () => {
    const arr = ["Maça", "Banana", "Pera"];
    expect(arr).toHaveLength(3)
})

test("Deve verificar o tamaho do array", () => {
    const arr = [1,2,3,4,]
    expect(arr.length).not.toBe(5)
    expect(arr).not.toHaveLength(5)
})

test("Deve verificar se um obejto está presente em um array", () => {
    const obj = {nome: "Ana", idade: 30}
    const arr = [obj]
    expect(arr).toContainEqual(obj)
})
