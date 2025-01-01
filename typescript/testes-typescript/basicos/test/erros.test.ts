function erro(lancar: boolean = true) {
  if (lancar) {
    throw new Error("Erro");
  }
}

function erroPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Erro"));
    });
  });
}
test("Deve verificar se um erro foi lançado", () => {
  expect(erro).toThrow("Erro");
});

test("Deve verificar se um erro foi lançado na chamada com parametros", () => {
  expect(() => erro(true)).toThrow("Erro");
});

test("Deve verificar se um erro foi lançado usando sintaxe promise", () => {
  return erroPromise().then(resultado => {
      console.log(resultado);
    }).catch((e) => {
      expect(e).toEqual(new Error("Erro"));
    });
});

test("Deve verificar se um erro foi lançado usando sintaxe async/await", async () => {
  try {
    await erroPromise();
  } catch (e: any) {
    expect(e).toEqual(new Error ("Erro"));
  }
});
test("Deve verificar se um erro foi lançado usando rejects", async () => {
    await expect(erroPromise).rejects.toEqual(new Error("Erro"));
})
