// type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};
// type Cliente (nome, email, contas[])
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};
function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;  
}
// const clientes: Cliente[] = []
const clientes: Cliente[] = [
  {
    nome: "Ana",
    email: "ana@gmail.com",
    contas: [
      { numero: 187554, saldo: 789.90, movimentar},
      { numero: 288907, saldo: 12.876, movimentar},
    ],
  },
];

// movimentarConta(numConta: number, valor: number)
function movimentarConta(numConta: number, valor: number) {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c)[0]
    conta?.movimentar(valor);

}
function consultarSaldo(numConta: number): number | null {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(cc => cc)[0];
    return conta?.saldo ?? null;

}
movimentarConta(187554, 900);
console.log(consultarSaldo(187554));

movimentarConta(3000, -350);
console.log(consultarSaldo(3000));