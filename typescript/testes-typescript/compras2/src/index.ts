import Api from "./Api";
import { Menu } from "./logica/index";

import {
	aguardarEnter,
	menuColuna,
	mensagemErro,
	mensagemSucesso,
	input,
	limparTela,
	mensagemInfo,
	mensagem,
	getEmailSenha,
} from "./terminalUtils";

const m = new Menu();

async function adicionarProduto() {
	const produto = await m.selecionarProduto(menuColuna, Api.buscarProdutos);
	const quantidade = parseInt(
		(await input(`Produto selecionado: ${produto.nome}\nQuantidade:`)) ?? ""
	);
	await m.adicionarProduto(produto, quantidade);
}

async function removerProduto() {
	const item = await m.selecionaItemPedidoAtual(menuColuna);
	if (!item) {
		return;
	}
	const quantidade = parseInt(
		(await input(`Produto selecionado: ${item?.produto.nome}\nQuantidade:`)) ??
			""
	);
	await m.deletarItemDoPedido(item.produto, quantidade);
}

async function menuInterno() {
	const indice = await menuColuna([
		"Adicionar produtos",
		"Remover produtos",
		"Finalizar pedido",
		"Ver pedido atual",
		"Ver histórico de pedidos",
		"Logout",
	]);

	limparTela();
	switch (indice) {
		case 0:
			await adicionarProduto();
			break;
		case 1:
			await removerProduto();
			break;
		case 2:
			await m.finalizarPedido(Api.atualizarUsuario);
			await mensagemSucesso("Pedido finalizado com sucesso!\n");
			await aguardarEnter();
			break;
		case 3:
			await m.infoPedidoAtual(mensagemInfo, mensagem);
			await aguardarEnter();
			break;
		case 4:
			await m.infoHistoricoPedidos(mensagemInfo, mensagem);
			await aguardarEnter();
			break;
		case 5:
			m.delogarUsuario();
			break;
	}
}

async function menuLogin() {
	const indice = await menuColuna(["Login", "Registrar", "Sair"]);

	limparTela();
	if (indice === 2) {
		process.exit(1);
	}

	const { email, senha } = await getEmailSenha();
	if (indice === 0) {
		await m.logarUsuario(email, senha, Api.logarUsuario);
		mensagemSucesso("\nLogin efetuado com sucesso!");
	} else if (indice === 1) {
		await m.registrarUsuario(email, senha, Api.salvarUsuario);
		mensagemInfo("Faça Login\n");
		await aguardarEnter();
	}
}

async function main() {
	while (true) {
		try {
			m.usuario ? await menuInterno() : await menuLogin();
			limparTela();
		} catch (error: any) {
			mensagemErro(`\nErro: ${error.message}\n`);
			await aguardarEnter();
			limparTela();
		}
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
