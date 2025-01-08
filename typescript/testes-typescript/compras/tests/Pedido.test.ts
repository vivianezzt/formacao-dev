import { Pedido } from "../src/Pedido";
import { ProdutoBuilder } from "./utils/ProdutoBuilder";

describe("Classe Pedido", () => {
  const id = 1;

  describe("Ao criar pedido", () => {
    test("Deve criar um pedido válido", () => {
      const pedido = new Pedido(id);
      expect(pedido).toMatchObject({ id, finalizado: false, produtos: [] });
    });

    test("Não deve criar um pedido com id negativo", () => {
      const id = -1;
      const criacao = () => new Pedido(id);
      expect(criacao).toThrow("Id deve ser positivo, ou 0");
    });
  });

  describe("Ao adicionar produtos ao pedido", () => {
    let pedido: Pedido;

    beforeEach(() => {
      pedido = new Pedido(id);
    });

    test("Deve adicionar um produto válido ao pedido", () => {
      const p = new ProdutoBuilder().padrao().build();
      const qtde = 2;
      pedido.adicionarProduto(p, qtde);
      expect(pedido.produtos).toEqual([{ produto: p, quantidade: qtde }]);
    });

    test("Deve lançar um erro ao adicionar um produto com estoque insuficiente", () => {
      const estoque = 10;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const adicao = () => pedido.adicionarProduto(p, estoque * 2);
      expect(adicao).toThrow(`Estoque insuficiente para ${p.nome}`);
    });

    test("Deve reduzir o estoque do produto", () => {
      const estoque = 10;
      const p = new ProdutoBuilder().padrao().comEstoque(estoque).build();
      const qtde = estoque - 1;
      pedido.adicionarProduto(p, qtde);
      expect(p.estoque).toBe(estoque - qtde);
    });

    test("Deve lançar um erro ao tentar adicionar produto em um pedido finalizado", () => {
      const p = new ProdutoBuilder().padrao().build();
      pedido.adicionarProduto(p, 1); // Adiciona um produto ao pedido
      pedido.finalizarPedido(); // Finaliza o pedido
      const adicao = () => pedido.adicionarProduto(p, 1); // Tenta adicionar novamente
      expect(adicao).toThrow("O pedido já foi finalizado"); // Espera erro de finalização
    });
  });

  describe("Ao remover produtos do pedido", () => {
    let pedido: Pedido;

    beforeEach(() => {
      pedido = new Pedido(id);
    });

    test("Deve deletar um produto válido", () => {
      const qtde = 5;
      const p = new ProdutoBuilder().padrao().comEstoque(qtde).build();
      pedido.adicionarProduto(p, qtde);
      pedido.removerProduto(p, qtde);
      expect(pedido.produtos).toEqual([]);
    });

    test("Deve retirar o produto do carrinho se tentar remover uma quantidade maior do que o adicionado", () => {
      const qtde = 5;
      const p = new ProdutoBuilder().padrao().comEstoque(qtde).build();
      pedido.adicionarProduto(p, qtde);
      pedido.removerProduto(p, qtde * 2);
      expect(pedido.produtos).toEqual([]);
    });

    test("Não deve gerar erros ao tentar remover um produto que não esteja no pedido", () => {
      const qtde = 5;
      const p = new ProdutoBuilder().padrao().comEstoque(qtde).build();
      const remocao = () => pedido.removerProduto(p, 1);
      expect(remocao).not.toThrow();
    });

    test("Deve atualizar o estoque do produto ao remover produto do pedido", () => {
      const p = new ProdutoBuilder().padrao().build();
      const estoqueInicial = p.estoque;
      const qtde = estoqueInicial - 1;
      pedido.adicionarProduto(p, qtde);
      pedido.removerProduto(p, qtde);
      expect(p.estoque).toBe(estoqueInicial);
    });
  });

  describe("Ao exibir o valor total", () => {
    test("Deve calcular o valor total dos pedidos", () => {
      const pedido = new Pedido(id);
      const p1 = new ProdutoBuilder().padrao().build();
      const p2 = new ProdutoBuilder().padrao().comDesconto(0.1).build();
      const qtde = 2;
      pedido.adicionarProduto(p1, qtde);
      pedido.adicionarProduto(p2, qtde);
      const total = p1.precoAtual * qtde + p2.precoAtual * qtde;
      expect(pedido.total).toBe(total);
    });

    test("Deve retornar 0 para o valor total de um pedido vazio", () => {
      const pedido = new Pedido(id);
      expect(pedido.total).toBe(0);
    });
  });

  describe("Ao finalizar o pedido", () => {
    let pedido: Pedido;

    beforeEach(() => {
      pedido = new Pedido(id);
    });

    test("Deve finalizar o pedido com produtos", () => {
      const p1 = new ProdutoBuilder().padrao().build();
      const p2 = new ProdutoBuilder().padrao().comDesconto(0.2).build();
      pedido.adicionarProduto(p1, 1);
      pedido.adicionarProduto(p2, 1);
      pedido.finalizarPedido();
      expect(pedido.finalizado).toBe(true);
    });

    test("Deve lançar um erro ao tentar finalizar um pedido sem produtos", () => {
      const finalizar = () => pedido.finalizarPedido();
      expect(finalizar).toThrow("Não é possivel finalizar pedido vazio");
    });

    test("Não deve permitir que um pedido finalizado volte a ficar não finalizado", () => {
      const p = new ProdutoBuilder().padrao().build();
      pedido.adicionarProduto(p, 1);
      pedido.finalizarPedido();
      pedido.finalizado = false;
      expect(pedido.finalizado).toBe(true);
    });
  });

  describe("Ao exibir o resumo", () => {
    let pedido: Pedido;

    beforeEach(() => {
      pedido = new Pedido(id);
    });

    test("Deve exibir o resumo de um pedido finalizado", () => {
      const p = new ProdutoBuilder().padrao().build();
      const qtde = 1;
      pedido.adicionarProduto(p, qtde);
      pedido.finalizarPedido();
      const resumo = pedido.getResumo();
      expect(resumo).toBe(
        `Pedido ID: ${id}\nProdutos:\n${p.getDescricao()}, Quantidade: ${qtde}\nTotal: R$${pedido.total.toFixed(
          2
        )}\nFinalizado: Sim`
      );
    });
  });
});
