import { Pedido, Usuario } from "../../src/logica";
import { ProdutoBuilder } from "../utils/ProdutoBuilder";
import { UsuarioBuilder } from "../utils/UsuarioBuilder";


jest.mock("../../src/Api");
describe("Classe Usuário", () => {
  const email = "teste@mail.com";
  const senha = "Senha123456";
  const id = "123";
  const pedido = new Pedido(1);
  const produto = new ProdutoBuilder().padrao().build();
  pedido.adicionarProduto(produto, 1);
  pedido.finalizarPedido();
  const historicoPedidos = [pedido];
  describe("Ao criar um usuário", () => {
    test("Deve ser possível criar um usuário com email e senha", () => {
      const u = new UsuarioBuilder().comEmail(email).comSenha(senha).build();
      expect(u).toMatchObject({ email, senha });
      expect(u).toBeInstanceOf(Usuario);
    });
    test("Deve ser possível criar um usuário com email, senha e id", () => {
      const u = new UsuarioBuilder()
        .comEmail(email)
        .comSenha(senha)
        .comId(id)
        .build();
      expect(u).toMatchObject({ email, senha, id });
      expect(u).toBeInstanceOf(Usuario);
    });
    test("Deve ser possível criar um usuário com email, senha e historico de pedidos", () => {
      const u = new UsuarioBuilder()
        .comEmail(email)
        .comSenha(senha)
        .comHistoricoPedidos(historicoPedidos)
        .build();
      expect(u).toMatchObject({ email, senha, historicoPedidos });
      expect(u).toBeInstanceOf(Usuario);
    });
    test("Deve ser possível criar um usuário com email, senha, historico de pedidos e id", () => {
      const u = new UsuarioBuilder()
        .comEmail(email)
        .comSenha(senha)
        .comId(id)
        .comHistoricoPedidos(historicoPedidos)
        .build();
      expect(u).toMatchObject({ email, senha, id, historicoPedidos });
      expect(u).toBeInstanceOf(Usuario);
    });
  });

  test("Deve lançar um erro ao tentar criar usuário com email sem @", () => {
    const tentativaCriacao = () =>
      new UsuarioBuilder().padrao().comEmail("fulanomail").build();
    expect(tentativaCriacao).toThrow(Error("Email inválido"));
  });
});
test("Deve lançar um erro ao tentar criar usuário sem senha com menos de 6 caracteres", () => {
  const tentativaCriacao = () =>
    new UsuarioBuilder().padrao().comSenha("oi").build();
  expect(tentativaCriacao).toThrow(
    Error("Senha deve ter no mínimo 6 caracteres")
  );
});

describe("Ao finalizar um pedido", () => {
  const produto = new ProdutoBuilder().padrao().build();

  test("Deve lançar um erro ao tentar finalizar um pedido vazio", () => {
    const u = new UsuarioBuilder().padrao().build();
    const finalizacao = () => u.finalizarPedido(jest.fn());
    expect(finalizacao).toThrow("Não é possível finalizar pedido vazio");
  });
  test("Deve finalizar um pedido com produtos", () => {
    const u = new UsuarioBuilder().padrao().build();
    u.pedidoAtual.adicionarProduto(produto, 1);
    const pedidoAntes = u.pedidoAtual;
    u.finalizarPedido(jest.fn());
    expect(u.historicoPedidos).toHaveLength(1);
    expect(u.pedidoAtual).not.toEqual(pedidoAntes);
    expect(u.pedidoAtual.produtos).toHaveLength(0);
  });
});

describe("Ao transformar em objeto", () => {
  const email = "teste@mail.com";
  const senha = "Senha123456";
  const id = "123";
  const pedido = new Pedido(1);
  const produto = new ProdutoBuilder().padrao().build();
  pedido.adicionarProduto(produto, 1);
  pedido.finalizarPedido();
  const historicoPedidos = [pedido];
  test("Deve gerar um objeto correto apenas com email , senha e pedidoAtual vazio", () => {
    const u = new UsuarioBuilder().comEmail(email).comSenha(senha).build();
    expect(u.toObj()).toEqual({
      email,
      senha,
      id: undefined,
      pedidoAtual: new Pedido(0).toObj(),
      historicoPedidos: [],
    });
  });

  test("Deve gerar um objeto correto apenas com email , senha e pedidoAtual com itens", () => {
    const u = new UsuarioBuilder().comEmail(email).comSenha(senha).build();
    u.pedidoAtual.adicionarProduto(produto, 1);
    const qtde = 1;

    expect(u.toObj()).toEqual({
      email,
      senha,
      id: undefined,
      pedidoAtual: {
        id: 0,
        finalizado: false,
        produtos: [
          {
            produto: produto.toObj(),
            quantidade: qtde,
          },
        ],
      },
      historicoPedidos: [],
    });
  });
  test("Deve gerar um objeto correto apenas com email, senha e id", () => {
    const u = new UsuarioBuilder()
      .comEmail(email)
      .comSenha(senha)
      .comId(id)
      .build();
    expect(u.toObj()).toStrictEqual({
      email,
      senha,
      id,
      pedidoAtual: new Pedido(0).toObj(),
      historicoPedidos: [],
    });
  });
  test("Deve gerar um objeto correto apenas com email, senha e historico de pedidos", () => {
    const u = new UsuarioBuilder()
      .comEmail(email)
      .comSenha(senha)
      .comHistoricoPedidos(historicoPedidos)
      .build()
    expect(u.toObj()).toStrictEqual({
      email,
      senha,
      id: undefined,
      pedidoAtual: new Pedido(historicoPedidos.length).toObj(),
      historicoPedidos: historicoPedidos.map((pedido) => pedido.toObj()),
    });
  });
});
