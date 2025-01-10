import { Produto } from "./Produto";

export class Pedido {
	public produtos: { produto: Produto; quantidade: number }[] = [];
	private _finalizado: boolean = false;

	constructor(public readonly id: number) {
		if (id < 0) {
			throw new Error("Id deve ser positivo, ou 0");
		}
	}

	get finalizado() {
		return this._finalizado;
	}

	set finalizado(novoValor: boolean) {
		if (this.finalizado && !novoValor) return;
		this._finalizado = novoValor;
	}

	adicionarProduto(produto: Produto, quantidade: number): void {
		if (this.finalizado) {
			throw new Error("O pedido já foi finalizado");
		}
		try {
			produto.reduzirEstoque(quantidade);
		} catch (error) {
			throw new Error(`Estoque insuficiente para ${produto.nome}`);
		}
		this.produtos.push({ produto, quantidade });
	}

	removerProduto(produto: Produto, quantidade: number): void {
		if (this.finalizado) {
			throw new Error("O pedido já foi finalizado");
		}
		const produtoPedido = this.produtos.find((p) => p.produto === produto);
		if (!produtoPedido) {
			return;
		}
		if (quantidade > produtoPedido.quantidade) {
			produtoPedido.produto.aumentarEstoque(produtoPedido.quantidade);
			produtoPedido.quantidade = 0;
		} else {
			produtoPedido.produto.aumentarEstoque(quantidade);
			produtoPedido.quantidade -= quantidade;
		}
		this.produtos = this.produtos.filter((p) => p.quantidade > 0);
	}

	finalizarPedido(): void {
		if (this.produtos.length === 0) {
			throw new Error("Não é possível finalizar pedido vazio");
		}
		this.finalizado = true;
	}

	get total() {
		return this.produtos.reduce(
			(acc, p) => acc + p.produto.precoAtual * p.quantidade,
			0
		);
	}

	getResumo(): string {
		const produtosDescritos = this.produtos
			.map((p) => `${p.produto.getDescricao()}, Quantidade: ${p.quantidade}`)
			.join("\n");

		return `Pedido ID: ${this.id}\nProdutos:\n${
			this.produtos.length > 0 ? produtosDescritos : "Nenhum produto encontrado"
		}\nTotal: R$${this.total.toFixed(2)}
			\nFinalizado: ${this.finalizado ? "Sim" : "Não"}`;
	}

	toObj() {
		return {
			id: this.id,
			produtos: this.produtos.map((p) => ({
				produto: p.produto.toObj(),
				quantidade: p.quantidade,
			})),
			finalizado: this.finalizado,
		};
	}
}
