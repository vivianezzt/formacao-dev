import { Menu, Usuario } from "../../src/logica";
import { ProdutoBuilder } from "../utils/ProdutoBuilder"
describe("Classe Menu", () => {
  let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(() => {
    menu = new Menu();
  });
  describe("Ao registrar um usuário", () => {
    // test("Deve chamar a função de salvarUsuario da API", async () => {
    //   Api.salvarUsuario = jest.fn();
    //   await menu.registrarUsuario(email, senha);
    //   expect(Api.salvarUsuario).toHaveBeenCalledWith(new Usuario(email, senha));
    // });

    test("Deve lançar um erro ao tentar salvar um Usuário com email inválido", async () => {
      const fn = jest.fn();
      const tentativaRegistro = async () =>
        await menu.registrarUsuario("oi", senha, fn);
      await expect(tentativaRegistro).rejects.toThrow("Email inválido");
    });

    test("Deve lançar um erro ao tentar salvar um Usuário a senha curta (menor que 6 caracteres)", async () => {
     const fn = jest.fn();
      const tentativaRegistro = async () =>
        await menu.registrarUsuario(email, "oi", fn);
      await expect(tentativaRegistro).rejects.toThrow(
        "Senha deve ter no mínimo 6 caracteres"
      );
    });
  });
});
describe("Ao logar um usuário", () => {
  let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(() => {
    menu = new Menu();
  });
  test("Não deve setar o usuário se não for possível recuperá-lo.", async () => {
    const fn = jest
      .fn()
      .mockRejectedValue(new Error("Usuário não encontrado"));
    try {
      await menu.logarUsuario(email, senha, fn);
    } catch (error) {
      expect(error).toEqual(new Error("Usuário não encontrado"));
    }
    expect(menu.usuario).toBeUndefined();
  });

  test("Deve logar um usuário retornado com id, email, senha e historico de pedidos", async () => {
    const usuario = new Usuario(email, senha, [], id);
    const fn = jest.fn().mockResolvedValue(usuario);
    await menu.logarUsuario(email, senha, fn);
    expect(menu.usuario).toEqual(usuario);
  });
});

describe("Uma vez que o usuário esteja logado", () => {
  let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest.fn().mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });
  describe("Ao chamar o método infoPedidoAtual", () => {
    test("Deve chamar as funções callback de infoPedidoAtual com os parâmetros corretos", async () => {
      const imprimiTitulo = jest.fn();
      const imprimiTexto = jest.fn();
      const resumo = "Resumo do pedido";
      jest.spyOn(menu.usuario!.pedidoAtual, "getResumo").mockReturnValue(resumo);
      await menu.infoPedidoAtual(imprimiTitulo, imprimiTexto);
      expect(imprimiTitulo).toHaveBeenCalledWith("Produtos disponíveis:\n");
      expect(imprimiTexto).toHaveBeenCalledWith(resumo);
    });
    });

    test("Não deve gerar erros ao chamar infoPedidoAtual sem usuário", async () => {
      const log = jest.fn
      menu.usuario = undefined
      const chamada = async () => await menu.infoPedidoAtual(log,log)
      expect(chamada).not.toThrow()
    });
  });

  describe("Ao finalizar um pedido", () => {
     let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest.fn().mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });

    test("Deve chamar o método finalizarPedido do usuário", async () => {
      jest.spyOn(menu.usuario!, "finalizarPedido").mockImplementation(() => {});
      await menu.finalizarPedido(jest.fn());
      expect(menu.usuario?.finalizarPedido).toHaveBeenCalled();
    });

    test("Não deve gerar erros ao tentar finalizar um pedido sem usuário", async () => {
      jest.spyOn(menu.usuario!, "finalizarPedido").mockImplementation(() => {});
      menu.usuario = undefined;
      const acao = async () => await menu.finalizarPedido(jest.fn());
      expect(acao).not.toThrow();
    });
  });
  describe("Ao selecionarProduto", () => {
     let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest.fn().mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });
    test("Deve chamar a callback com as informações corretas", async () => {
      const produtos = [
        new ProdutoBuilder().padrao().comNome("produto1").build(),
        new ProdutoBuilder().padrao().comNome("produto2").build(),
      ];
      const buscarProdutos = jest.fn().mockResolvedValue(produtos);
      const geraMenu = jest.fn().mockReturnValue(0);
      const produtoSelecionado = await menu.selecionarProduto(geraMenu, buscarProdutos);
      expect(produtoSelecionado).toEqual(produtos[0]);
    });
  });

  describe("Ao exibir o infoHistoricoPedidos", () => {
     let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest.fn().mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });
    const imprimiTexto = jest.fn();
    const imprimiTitulo = jest.fn();
    test("Não deve gerar erros quando o histórico for vazio", () => {
      const chamada = () =>
        menu.infoHistoricoPedidos(imprimiTexto, imprimiTitulo);
      expect(menu.usuario?.historicoPedidos).toHaveLength(0);
      expect(chamada).not.toThrow();
    });
      test("Deve passar os arumentos corretos para as funções", () => {
        const atualizarUsuario = jest.fn()
        const p = new ProdutoBuilder().padrao().build()
        menu.adicionarProduto(p,1)
        const pedidoAntes = menu.usuario?.pedidoAtual
        menu.finalizarPedido(atualizarUsuario)
        menu.infoHistoricoPedidos(imprimiTitulo, imprimiTexto)
        expect(imprimiTexto).toHaveBeenCalledWith(pedidoAntes?.getResumo())
    });

    test("Não deve gerar erros ao chamar infoHistoricoPedidos sem usuário", () => {
      menu.usuario = undefined;
      const chamada = async () => await
        menu.infoHistoricoPedidos(imprimiTitulo, imprimiTexto);
      expect(chamada).not.toThrow();
    });
  });

  describe("Ao adicionarProduto", () => {
     let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest.fn().mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });
    test("Deve adicionar um produto ao pedido atual", async () => {
      const p = new ProdutoBuilder().padrao().build();
      const qtde = 1;
      const pedidoAntes = menu.usuario?.pedidoAtual.toObj();
      menu.adicionarProduto(p, qtde);
      expect(menu.usuario?.pedidoAtual.toObj()).not.toEqual(pedidoAntes);
      expect(menu.usuario?.pedidoAtual.produtos).toHaveLength(
        pedidoAntes!.produtos.length + 1
      );
    });

    test("Não deve gerar erros ao tentar adicionar um produto ao pedido sem usuário", () => {
      menu.usuario = undefined;
      const p = new ProdutoBuilder().padrao().build();
      const qtde = 1;
      const adicao = () => menu.adicionarProduto(p, qtde);
      expect(adicao).not.toThrow();
    });
  });

describe("Ao chamar selecionaItemPedidoAtual", () => {
  const indice = 0;
  let menu: Menu;
  let email = "test@mail.com";
  const senha = "1234567";
  const id = "123";
  const p1 = new ProdutoBuilder().padrao().comNome("produto1").build();
  const p2 = new ProdutoBuilder().padrao().comNome("produto2").build();
  const qtde = 1;
  const gerarMenu = jest.fn().mockResolvedValue(indice);
  beforeEach(async () => {
    menu = new Menu();
    const logarUsuario = jest
      .fn()
      .mockResolvedValue(new Usuario(email, senha, [], id));
    await menu.logarUsuario(email, senha, logarUsuario);
  });
  test("Deve se passar os parâmetros corretos para a função", async () => {
    menu.adicionarProduto(p1, qtde);
    menu.adicionarProduto(p2, qtde);
    const produtoSelecionado = await menu.selecionaItemPedidoAtual(gerarMenu);

    expect(gerarMenu).toHaveBeenCalledWith([
      `${p1.nome} - ${qtde}`,
      `${p2.nome} - ${qtde}`,
    ]);
  });
  test("Deve verificar se o produto selecionado é retornado", async () => {
    const pedidoSelecionado = await menu.selecionaItemPedidoAtual(gerarMenu);
    expect(pedidoSelecionado).toEqual(
      menu.usuario?.pedidoAtual.produtos[indice]
    );
  });
  test("Não deve gerar erros ao chamar selecionaItemPedidoAtual sem usuário", async () => {
    menu.usuario = undefined
    const chamada = async () => await menu.selecionaItemPedidoAtual(gerarMenu);
    expect(chamada).not.toThrow();
  });
  test("Deve chamar a função com um array vazio se não tiver usuário", async() => {
    menu.usuario = undefined
    await menu.selecionaItemPedidoAtual(gerarMenu)
    expect(gerarMenu).toHaveBeenCalledWith([])

  })

  describe("Ao chamar deletarItemDoPedido", () => {
    const p = new ProdutoBuilder().padrao().build();
    const qdte = 1;
    test("Deve deletar um item do pedido Atual", () => {
      const pedidoAntes = menu.usuario?.pedidoAtual.toObj();
      menu.adicionarProduto(p, qtde);
      menu.deletarItemDoPedido(p, qdte);
      expect(menu.usuario?.pedidoAtual.toObj()).toEqual(pedidoAntes);
    });

    test("Não deve gerar erros ao tentar deletar um item do pedido sem usuário", () => {
      menu.usuario = undefined
      menu.adicionarProduto(p, qtde);
      const exclusao = () => menu.deletarItemDoPedido(p, qdte);
      expect(exclusao).not.toThrow();
    });
  });

  describe("Ao deslogar um usuário", () => {
    test("Deve setar o usuário como undefined", async () => {
      const historicoPedidos: never[] = [];
      const logarUsuario = jest
        .fn()
        .mockResolvedValue({ email, senha, historicoPedidos, id });
      await menu.logarUsuario(email, senha, logarUsuario);
      const usuarioAntes = menu.usuario?.toObj();
      menu.delogarUsuario();
      expect(menu.usuario?.toObj()).not.toEqual(usuarioAntes);
      expect(menu.usuario).toBeUndefined();
    });

    test("Não deve gerar erros ao tentar deslogar um usuário não logado", async() => {
      menu.usuario = undefined;
      const usuarioAntes = menu.usuario;
      const deslogar = () => menu.delogarUsuario();
      expect(usuarioAntes).toBeUndefined();
      expect(deslogar).not.toThrow()
      expect(menu.usuario).toBeUndefined();
    });
  });
});
