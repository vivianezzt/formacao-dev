export class Produto {
	public precoAtual: number;
	constructor(
		public readonly nome: string,
		public readonly precoOriginal: number,
		public estoque: number,
		private _desconto?: number | undefined
	) {
		if (!nome) {
			throw new Error("Nome não pode ser vazio");
		}

		if (nome.length < 3) {
			throw new Error("Nome deve ter no mínimo 3 caracteres");
		}

		if (!precoOriginal && precoOriginal !== 0) {
			throw new Error("Preço não pode ser vazio");
		}

		if (precoOriginal <= 0) {
			throw new Error("Preço deve ser positivo");
		}

		if (!estoque && estoque !== 0) {
			throw new Error("Estoque não pode ser vazio");
		}

		if (estoque <= 0) {
			throw new Error("Estoque deve ser positivo");
		}

		this.precoAtual = this.aplicarDesconto(precoOriginal, _desconto);
	}

	aplicarDesconto(preco: number, desconto: number | undefined): number {
		if (desconto !== 0 && !desconto) {
			return preco;
		}
		if (desconto <= 0) {
			throw new Error("Desconto deve ser positivo");
		}
		if (desconto > 0 && desconto < 1) {
			//0.8 = 80%, 80 = - R$80
			return preco * (1 - desconto);
		} else {
			return preco - desconto > 0 ? preco - desconto : 0;
		}
	}

	set desconto(novoDesconto: number) {
		this.precoAtual = this.aplicarDesconto(this.precoOriginal, novoDesconto);
		this._desconto = novoDesconto;
	}

	get desconto(): number | undefined {
		return this._desconto;
	}

	reduzirEstoque(quantidade: number): void {
		if (quantidade <= 0) {
			throw new Error("Não é possível alterar estoque");
		}
		if (quantidade > this.estoque) {
			throw new Error("Estoque insuficiente");
		}
		this.estoque -= quantidade;
	}

	aumentarEstoque(quantidade: number): void {
		if (quantidade < 0) {
			throw new Error("Não é possível alterar estoque");
		}
		this.estoque += quantidade;
	}

	getDescricao(): string {
		const precoAtualFormatado = this.precoAtual.toFixed(2);
		const textoBase = `Produto: ${this.nome}, Preço: R$${precoAtualFormatado}`;
		if (this._desconto) {
			let textoDesconto = "";
			if (this._desconto > 1) {
				textoDesconto = `Desconto: R$${this._desconto.toFixed(2)}`;
			} else {
				textoDesconto = `Desconto: ${this._desconto * 100}%`;
			}
			return `${textoBase}, ${textoDesconto}, Preço Original: R$${this.precoOriginal.toFixed(
				2
			)}`;
		}

		return textoBase;
	}

	toObj() {
		return {
			nome: this.nome,
			precoOriginal: this.precoOriginal,
			precoAtual: this.precoAtual,
			estoque: this.estoque,
			desconto: this._desconto,
		};
	}
}
