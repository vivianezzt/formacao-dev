import { ProdutoBuilder } from "./utils/ProdutoBuilder";

describe("Classe Produto", () => {
  const nome = "Produto teste";
  const estoque = 5;
  const precoOriginal = 100;
  describe("Ao criar um produto", () => {
    test("Deve criar um produto válido com todas as propriedades e desconto fixo", () => {
      const desconto = 10;
      const p = new ProdutoBuilder()
        .comNome(nome)
        .comDesconto(desconto)
        .comEstoque(estoque)
        .comPrecoOriginal(precoOriginal)
        .build();
      expect(p).toBeDefined();
      expect(p).toMatchObject({
        nome: "Produto teste",
        estoque,
        desconto,
        precoAtual: precoOriginal - desconto,
      });
    });
    test("Deve criar um produto válido com todas as propriedades e desconto percentual", () => {
      const desconto = 0.5;
      const p = new ProdutoBuilder()
        .comNome(nome)
        .comEstoque(estoque)
        .comPrecoOriginal(precoOriginal)
        .comDesconto(desconto)
        .build();
      expect(p).toMatchObject({
        nome,
        estoque,
        desconto,
        precoAtual: precoOriginal * (1 - desconto),
      });
    });
    test("Deve criar um produto válido sem desconto", () => {
      const p = new ProdutoBuilder()
        .comNome(nome)
        .comEstoque(estoque)
        .comPrecoOriginal(precoOriginal)
        .build();
      expect(p).toMatchObject({
        nome,
        estoque,
        desconto: undefined,
        precoAtual: precoOriginal,
      });
    });
    test("Deve lançar um erro ao tentar criar produto sem nome", () => {
      const p = () =>
        new ProdutoBuilder()
          .comEstoque(estoque)
          .comPrecoOriginal(precoOriginal)
          .build();
      expect(p).toThrow("Nome não pode ser vazio");
    });
    test("Deve lançar um erro ao tentar criar produto com nome menor que 3", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome("a")
          .comEstoque(estoque)
          .comPrecoOriginal(precoOriginal)
          .build();
      expect(p).toThrow("Nome deve ter no minímo 3 caracteres");
    });
    test("Deve lançar um erro ao tentar criar produto sem preço", () => {
      const p = () =>
        new ProdutoBuilder().comNome(nome).comEstoque(estoque).build();
      expect(p).toThrow("Preço não pode ser vazio");
    });
    test("Deve lançar um erro ao tentar criar produto sem estoque", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(precoOriginal)
          .build();
      expect(p).toThrow("Estoque não pode ser vazio");
    });
    test("Deve lançar um erro ao tentar criar produto com estoque negativo", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(precoOriginal)
          .comEstoque(-50)
          .build();
      expect(p).toThrow("Estoque deve ser positivo");
    });
    test("Deve lançar um erro ao tentar criar produto com estoque 0", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(precoOriginal)
          .comEstoque(0)
          .build();
      expect(p).toThrow("Estoque deve ser positivo");
    });
    test("Deve lançar um erro ao tentar criar produto com precoOriginal negativo", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(-50)
          .comEstoque(0)
          .build();
      expect(p).toThrow("Preço deve ser positivo");
    });
    test("Deve lançar um erro ao tentar criar produto com preço 0", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(0)
          .comEstoque(0)
          .build();
      expect(p).toThrow("Preço deve ser positivo");
    });
    test("Deve lançar um erro ao tentar criar produto com desconto negativo", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(precoOriginal)
          .comEstoque(estoque)
          .comDesconto(-5)
          .build();
      expect(p).toThrow("Desconto deve ser positivo");
    });
    test("Deve lançar um erro ao tentar criar produto com desconto 0", () => {
      const p = () =>
        new ProdutoBuilder()
          .comNome(nome)
          .comPrecoOriginal(precoOriginal)
          .comEstoque(estoque)
          .comDesconto(0)
          .build();
      expect(p).toThrow("Desconto deve ser positivo");
    });
    test("Deve fazer com que o produto tenha o desconto 0 se o desconto for maior que o preço", () => {
      const preco = 10
      const p = new ProdutoBuilder()
            .padrao()
            .comPrecoOriginal(preco)
            .comDesconto(preco*2)
            .build()
        expect(p.precoAtual).toBe(0)
    })
  });

  describe("Ao mudar o desconto", () => {
    test("Deve aplicar o desconto fixo corretamente", () => {
      const p = new ProdutoBuilder()
        .padrao()
        .comPrecoOriginal(precoOriginal)
        .build();
      const desconto = 10;
      p.desconto = desconto;
      expect(p.precoOriginal).toBe(precoOriginal);
      expect(p.precoAtual).toBe(precoOriginal - desconto);
      expect(p.desconto).toBe(desconto);
    });
    test("Deve aplicar o desconto percentual corretamente", () => {
      const p = new ProdutoBuilder()
        .padrao()
        .comPrecoOriginal(precoOriginal)
        .build();
      const desconto = 0.5;
      p.desconto = desconto;
      expect(p.precoOriginal).toBe(precoOriginal);
      expect(p.precoAtual).toBe(precoOriginal * (1 - desconto));
      expect(p.desconto).toBe(desconto);
    });
    test("Deve lançar um erro ao tentar alterar o valor para negativo", () => {
      const p = new ProdutoBuilder()
        .padrao()
        .comPrecoOriginal(precoOriginal)
        .build();
      const desconto = -10;
      const alteracao = () => (p.desconto = desconto);
      expect(alteracao).toThrow("Desconto deve ser positivo");
    });
    test("Deve lançar um erro ao tentar alterar o valor para negativo", () => {
      const p = new ProdutoBuilder()
        .padrao()
        .comPrecoOriginal(precoOriginal)
        .build();
      const desconto = -0.5;
      const alteracao = () => (p.desconto = desconto);
      expect(alteracao).toThrow("Desconto deve ser positivo");
    });
    test("Deve lançar um erro ao tentar alterar o valor para 0", () => {
      const p = new ProdutoBuilder()
        .padrao()
        .comPrecoOriginal(precoOriginal)
        .build();
      const desconto = 0;
      const alteracao = () => (p.desconto = desconto);
      expect(alteracao).toThrow("Desconto deve ser positivo");
    });
  });

  describe("Ao reduzir o estoque", () => {
    const estoque = 5;
    test("Deve reduzir o estoque corretamente", () => {
      const tirar = 2;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      p.reduzirEstoque(tirar);
      expect(p.estoque).toBe(estoque - tirar);
    });
    test("Deve lançar um erro ao tentar retirar mais do que o estoque tem", () => {
      const tirar = estoque * 2;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const alteracao = () => p.reduzirEstoque(tirar);
      expect(alteracao).toThrow("Estoque insuficiente");
    });
    test("Deve permitir a retirada da mesma quantidade de itens presente no estoque", () => {
      const tirar = estoque;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      p.reduzirEstoque(tirar);
      expect(p.estoque).toBe(0);
    });
    test("Deve lançar um erro ao tentar retirar um valor negativo", () => {
      const tirar = -5;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const alteracao = () => p.reduzirEstoque(tirar);
      expect(alteracao).toThrow("Não é possivel alterar o estoque");
    });
  });

  describe("Ao aumentar o estoque", () => {
    test("Deve aumentar o estoque corretamente", () => {
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const aumentarEm = 1;
      p.aumentarEstoque(aumentarEm);
      expect(p.estoque).toBe(estoque + aumentarEm);
    });
    test("Deve lançar um erro ao tentar adicionar um valor negativo", () => {
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const aumentarEm = -1;
      const alteracao = () => p.aumentarEstoque(aumentarEm);
      expect(alteracao).toThrow("Não é possivel alterar o estoque");
    });
  });

  describe("Ao obter a descrição", () => {
    const produtoParcial = () =>
      new ProdutoBuilder()
        .comNome(nome)
        .comEstoque(estoque)
        .comPrecoOriginal(precoOriginal);
    test("Deve retornar a descrição de um produto com desconto fixo", () => {
      const desconto = 10;
      const p = produtoParcial().comDesconto(desconto).build();
      const descricao = p.getDescricao();
      expect(descricao).toBe(
        `Produto: ${nome}, Preço: R$${(precoOriginal - desconto).toFixed(
          2
        )}, Desconto: R$${desconto.toFixed(
          2
        )}, Preço Original: R$${precoOriginal.toFixed(2)}`
      );
    });
    test("Deve retornar a descrição de um produto com desconto percentual", () => {
      const desconto = 0.5;
      const p = produtoParcial().comDesconto(desconto).build();
      const descricao = p.getDescricao();
      expect(descricao).toBe(
        `Produto: ${nome}, Preço: R$${(precoOriginal * (1 - desconto)).toFixed(
          2
        )}, Desconto: ${
          desconto * 100
        }%, Preço Original: R$${precoOriginal.toFixed(2)}`
      );
    });
    test("Deve retornar a descrição de um produto sem desconto", () => {
      const p = produtoParcial().build();
      const descricao = p.getDescricao();
      expect(descricao).toBe(
        `Produto: ${nome}, Preço: R$${precoOriginal.toFixed(2)}`
      );
    });
  });
});
