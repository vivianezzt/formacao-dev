import { Produto, Usuario } from "./index";
import Api from "../Api";

export class Menu {
	public usuario: Usuario | undefined = undefined;
	constructor() {}

	async logarUsuario(email: string, senha: string, logarUsuario: (email: string, senha: string) => Promise<Usuario>) {
		const resultado = await logarUsuario(email, senha);
		this.usuario = new Usuario(
			email,
			senha,
			resultado.historicoPedidos,
			resultado.id
		);
	}

	async finalizarPedido(atualizarUsuario:(u: Usuario) => Promise<{dados: any, status: number}>) {
		this.usuario?.finalizarPedido(atualizarUsuario);
	}

	async infoPedidoAtual(
		imprimeTitulo: (t: string) => void,
		imprimeTexto: (t: string) => void
	) {
		imprimeTitulo("Produtos disponíveis:\n");

		imprimeTexto(this.usuario?.pedidoAtual.getResumo() ?? "");
	}

	async infoHistoricoPedidos(
		imprimeTitulo: (t: string) => void,
		imprimeTexto: (t: string) => void
	) {
		this.usuario?.historicoPedidos.forEach((pedido: any) => {
			imprimeTitulo(`\nPedido ${pedido.id} :`);
			imprimeTexto(pedido.getResumo());
		});
	}

	async delogarUsuario() {
		this.usuario = undefined;
	}

	async registrarUsuario(email: string, senha: string, funcaoApi: (u: Usuario) => Promise<{dados: any, status: number}>) {
		(new Usuario(email, senha));
	}

	async selecionarProduto(geraMenu: (s: string[]) => Promise<number>, buscarProdutos: () => Promise<Produto[]>) {
		const produtos: Produto[] = await buscarProdutos();
		const indice = await geraMenu(
			produtos.map(
				(p) => `${p.nome} - R$${p.precoAtual} - Estoque:${p.estoque}`
			)
		);
		return produtos[indice];
	}

	async adicionarProduto(produto: Produto, quantidade: number) {
		this.usuario?.pedidoAtual.adicionarProduto(produto, quantidade);
	}

	async selecionaItemPedidoAtual(geraMenu: (s: string[]) => Promise<number>) {
		const indice = await geraMenu(
			this.usuario?.pedidoAtual.produtos.map((item: any) => {
				return `${item.produto.nome} - ${item.quantidade}`;
			}) ?? []
		);
		const item = this.usuario?.pedidoAtual?.produtos[indice];
		return item;
	}

	async deletarItemDoPedido(produto: Produto, quantidade: number) {
		this.usuario?.pedidoAtual.removerProduto(produto, quantidade);
	}
}
