export default class Pessoa {
	nome: string;
	idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	seApresentar(): string {
		return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
	}

	celebrarAniversario(): void {
		this.idade += 1;
		console.log("Feliz aniversário!");
	}

	maiorDeIdade(): boolean {
		return this.idade >= 18;
	}
}