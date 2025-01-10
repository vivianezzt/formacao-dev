import { terminal } from "terminal-kit";

export async function aguardarEnter(): Promise<void> {
	await terminal.inputField().promise;
}

export async function menuColuna(opcoes: string[]) {
	const dados = await terminal.singleColumnMenu(opcoes).promise;
	return dados.selectedIndex;
}

export async function input(texto: string, novaLinha = false) {
	terminal.blue(`\n${texto} ${novaLinha ? "\n" : ""}`);
	return terminal.inputField().promise;
}

export async function limparTela() {
	terminal.clear();
}

export async function mensagem(texto: string) {
	terminal.white(texto + "\n");
}

export async function mensagemInfo(texto: string) {
	terminal.blue(texto + "\n");
}

export async function getEmailSenha() {
	const email = await input("Email:");
	const senha = await input("Senha:");
	return { email: email ?? "", senha: senha ?? "" };
}

export async function mensagemSucesso(texto: string) {
	terminal.green(`\n${texto}\n`);
	await aguardarEnter();
}

export async function mensagemErro(texto: string) {
	terminal.red(`\n${texto}\n`);
	await aguardarEnter();
}
