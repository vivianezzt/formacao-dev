export class Utils {
	// Primeiro Teste -> max	
    static max(array: number[]): number | null {
		return array.length === 0 ? null : Math.max(...array);
	}

	static min(array: number[]): number | null {
		return array.length === 0 ? null : Math.min(...array);
	}

    static somaArray(array: number[]): number {
		return array.reduce((acc, curr) => acc + curr, 0);
	}

    static limitarNumero(valor: number, min: number, max: number): number {
		return Math.min(Math.max(valor, min), max);
	}

	static diferencaDeArrays<T>(array1: T[], array2: T[]): T[] {
		const arr1TemObj = array1.some((elemento) => typeof elemento === "object");	
		const arr2TemObj = array2.some((elemento) => typeof elemento === "object");
		if(arr1TemObj || arr2TemObj){
			throw new Error("Arrays com objetos não são suportados");
		}
		return array1.filter((elemento) => !array2.includes(elemento));
	}
    
	static removerDuplicados<T>(array: T[]): T[] {
		const arrTemObj = array.some((el) => typeof el=== "object");
		if(arrTemObj){
			throw new Error("Arrays com objetos não são suportados");
		}
		return Array.from(new Set(array));
	}

	static capitalizarString(s: string): string {
		if (!s) return "";
		return s
			.split(" ")
			.map((pedaco) => {
				pedaco = pedaco.toLowerCase();
				const c = pedaco[0];
				return pedaco.replace(c, c.toUpperCase());
			})
			.join(" ");
	}

	static encontrarPorId(array: any, id: number) {
		return array.find((elemento: any) => elemento.id === id);
	}

	static inverterObjeto(objeto: object): any {
		return Object.entries(objeto).reduce((novoObjeto, [chave, valor]) => {
			if( typeof valor === "object"){
				novoObjeto[JSON.stringify(valor) as string] = chave;
			} else{
				novoObjeto[valor as string] = chave;
			}
			return novoObjeto;
		}, {} as Record<string, string>);
	}

	static deletarPropriedade(objeto: {[chaves:string]:any}, propriedade: string): any {
		const novoObjeto = { ...objeto };
		delete novoObjeto[propriedade];
		return novoObjeto;
	}

	static calcularAreaCirculo(raio: number): number {
		if (raio < 0) {
			throw new Error("O raio não pode ser negativo");
		}
		return Math.PI * raio * raio;
	}
	
	static async buscarDadosComDelay<T>(dados: T, delay: number): Promise<T> {
		return new Promise((resolve) => setTimeout(() => resolve(dados), delay));
	}

	static async carregarRecursoComTimeout<T>(
		recurso: () => Promise<T>,
		timeout: number
	): Promise<T> {
		let timeoutHandle: NodeJS.Timeout;
		const timeoutPromise = new Promise<never>((_, reject) => {
			timeoutHandle = setTimeout(
				() => reject(new Error("Timeout ao carregar recurso")),
				timeout
			);
		});
		return Promise.race([recurso(), timeoutPromise]).then((resultado) => {
			clearTimeout(timeoutHandle);
			return resultado;
		});
	}
}