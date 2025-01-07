export class Produto {
	public precoAtual: number;
	constructor(
		public nome: string,
		public precoOriginal: number,
		public estoque: number,
		private _desconto?: number | undefined
	) {
		if(!nome){
			throw new Error("Nome não pode ser vazio")
		}
		if (nome.length < 3) {
			throw new Error("Nome deve ter no minímo 3 caracteres");
		}
		
		if(!precoOriginal && precoOriginal !== 0){
			throw new Error("Preço não pode ser vazio")
		}
		if (precoOriginal <= 0) {
			throw new Error("Preço deve ser positivo");
		} 
		if(!estoque && estoque !== 0){
			throw new Error("Estoque não pode ser vazio")
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
		if(desconto <= 0){
			throw new Error("Desconto deve ser positivo")
		}
		if (desconto > 0 && desconto < 1) { //0.8 = 80%, 80 = - R$80
			return preco * (1 - desconto);
		} else {
			return preco - desconto > 0 ? preco - desconto : 0;
		}
	}

	set desconto(novoDesconto: number) {
		this.precoAtual = this.aplicarDesconto(this.precoOriginal, novoDesconto);
		this._desconto = novoDesconto
	}

	get desconto(): number | undefined {
		return this._desconto;
	}

	reduzirEstoque(quantidade: number): void {
		if(quantidade <= 0){
			throw new Error("Não é possivel alterar o estoque")
		}
		if (quantidade > this.estoque) {
			throw new Error("Estoque insuficiente");
		}
		this.estoque -= quantidade;
	}

	aumentarEstoque(quantidade: number): void {
		if(quantidade < 0){
			throw new Error("Não é possivel alterar o estoque")
		}
		this.estoque += quantidade;
	}

	getDescricao(): string {
		const zero = Number(0).toFixed(2);
		const precoAtualFormatado = this.precoAtual
			? this.precoAtual.toFixed(2)
			: zero;
		const textoBase = `Produto: ${
			this.nome ?? "Produto Teste"
		}, Preço: R$${precoAtualFormatado}`;
		if (this._desconto) {
			let textoDesconto = "";
			if (this._desconto > 1) {
				textoDesconto = `Desconto: R$${this._desconto.toFixed(2) ?? zero}`;
			} else {
				textoDesconto = `Desconto: ${this._desconto * 100}%`;
			}
			return `${textoBase}, ${textoDesconto}, Preço Original: R$${this.precoOriginal.toFixed(
				2
			)}`;
		}

		return textoBase;
	}
}