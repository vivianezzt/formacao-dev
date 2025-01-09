import axios from "axios";

export const url = "https://jsonplaceholder.typicode.com/users";

export async function pegarUsuarioPorId(id: number) {
	try {
		if (id < 0) {
			throw new Error("Id não pode ser negativo");
		}

		const resposta = await axios.get(`${url}/${id}`);
		const obj:any = resposta.data;
		if (obj.website.includes(".biz")) {
			obj.website = "INVÁLIDO";
		}

		if (!obj.email.includes(".com")) {
			obj.email = "INVÁLIDO";
		}
		return obj;
	} catch (erro: any) {
		if (erro.message === "Id não pode ser negativo") {
			throw erro;
		}
		throw new Error("Não foi possível recuperar o usuário");
	}
}

export async function criarUsuario(usuario: Partial<{id:string,name:string, email:string, website:string, address: string, phone: string, company: string}>) {
	if (!usuario.name || !usuario.email || !usuario.website) {
		throw new Error("Usuário inválido");
	}

	if (usuario.id) {
		throw new Error("Usuário não pode ter id");
	}

	const resposta = await axios.post(url, usuario);
	const obj:any = resposta.data;
	["name", "email", "website", "address", "phone", "company"].forEach(
		(prop) => {
			if (!obj[prop]) {
				obj[prop] = "INVÁLIDO";
			}
		}
	);

	return obj;
}
