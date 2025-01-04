const VendaStatus = {
    INICIADA: 'INICIADA',
    PENDENTE: 'PENDENTE',
    FINALIZADA: 'FINALIZADA',
    CANCELADA: 'CANCELADA'
} as const;
let status2: string = VendaStatus.INICIADA;
// VendaStatus.INICIADA = '123';
console.log(VendaStatus.INICIADA); // INICIADA
console.log(VendaStatus.PENDENTE); // PENDENTE

const Erros = {
    NOME_NULO: 'nome_nulo',
    EMAIL_NAO_INFORMADO: 'email_nao_informado',
    URL_INVALIDA: 'url_invalida'  
}

console.log(Erros.NOME_NULO); // nome_nulo