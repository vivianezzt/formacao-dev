import axios from "axios";
import { Pedido, Produto, Usuario } from "./logica";

export default class Api {
	private static baseURL: string = "http://localhost:3000";
	constructor() {}
	
	private static async get(caminho: string) {
		const resposta = await axios.get(`${this.baseURL}/${caminho}`);
		return { dados: resposta.data, status: resposta.status };
	}

	private static async post(caminho: string, dados: any) {
		const resposta = await axios.post(`${this.baseURL}/${caminho}`, dados);
		return { dados: resposta.data, status: resposta.status };
	}

	private static async put(caminho: string, dados: any) {
		const resposta = await axios.put(`${this.baseURL}/${caminho}`, dados);
		return { dados: resposta.data, status: resposta.status };
	}

	static async buscarProdutos() {
		const response = await this.get("produtos");
		return response.dados.map(
			(p: any) => new Produto(p.nome, p.precoOriginal, p.estoque, p.desconto)
		);
	}
	static async atualizarUsuario(usuario: Usuario) {
		return this.put(`usuarios/${usuario.id}`, usuario.toObj());
	}

	static async salvarProduto(produto: Produto) {
		return this.post("produtos", produto.toObj());
	}
	static async salvarUsuario(usuario: Usuario) {
		return this.post("usuarios", usuario.toObj());
	}
	static async logarUsuario(email: string, senha: string) {
		const d = await this.get(`usuarios?email=${email}&senha=${senha}`);
		const u = d.dados[0];
		if (!u) {
			throw new Error("Usuário não encontrado");
		}
		const historico = u.historicoPedidos.map((pedido: any) => {
			const p = new Pedido(pedido.id);
			pedido.produtos.forEach(({ produto, quantidade }: any) => {
				p.adicionarProduto(
					new Produto(
						produto.nome,
						produto.precoOriginal,
						produto.estoque,
						produto.desconto
					),
					quantidade
				);
			});

			p.finalizado = pedido.finalizado;
			return p;
		});
		return new Usuario(u.email, u.senha, historico, u.id);
	}
}
