import { Pedido } from "./Pedido";

export class Usuario {
	public pedidoAtual: Pedido;
	constructor(
		public email: string,
		public senha: string,
		public historicoPedidos: Pedido[] = [],
		public id?: string
	) {
		if (!email.includes("@")) {
			throw new Error("Email inválido");
		}

		if (senha.length < 6) {
			throw new Error("Senha deve ter no mínimo 6 caracteres");
		}

		this.pedidoAtual = new Pedido(this.historicoPedidos.length);
	}

	finalizarPedido(atualizarUsuario:(u: Usuario) => Promise<{dados: any, status: number}>) {
		this.pedidoAtual.finalizarPedido();
		atualizarUsuario(this);
		this.historicoPedidos.push(this.pedidoAtual);
		this.pedidoAtual = new Pedido(this.historicoPedidos.length);
	}

	toObj() {
		return {
			email: this.email,
			senha: this.senha,
			id: this.id,
			pedidoAtual: this.pedidoAtual.toObj(),
			historicoPedidos: this.historicoPedidos.map((pedido) => pedido.toObj())
		};
	}
}
