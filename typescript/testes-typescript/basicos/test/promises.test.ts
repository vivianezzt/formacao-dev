function resolvida() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados");
    }, 3000);
  });
}

function rejeitada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Falhou");
    }, 1000);
  });
}
describe("Deve verificar o resultado de uma promise resolvida", () => {
  test("Usando sintaxe promise", () => {
    return resolvida().then((resultado) => {
      expect(resultado).toBe("Dados");
    });
  });

  test("usando sintaxe async/await", async () => {
    const resultado = await resolvida();
    expect(resultado).toBe("Dados");
  });
  test("usando resolves", async () => {
    await expect(resolvida()).resolves.toBe("Dados");
  });
});
describe("Deve verificar o resultado de uma promise rejeitada", () => {
  test("Usando sintaxe promise", () => {
    return rejeitada()
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((e) => {
        expect(e).toBe("Falhou");
      });
  });

  test("usando sintaxe async/await", async () => {
    try {
      const resultado = await rejeitada();
    } catch (e: any) {
        console.log(e)
      expect(e).toBe("Falhou");
    }
  });
  test("usando rejects", async () => {
    await expect(rejeitada()).rejects.toBe("Falhou");
  });
   test("Deve testar usando fake timers",async () => {
    jest.useFakeTimers();
    const f = resolvida();
    jest.advanceTimersByTime(3000);
    await expect(f).resolves.toBe("Dados");
  });
});
