export function saudacao(nome: string): string {
    return `Olá ${nome}! Passar Bem`;
}

export function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}

export function multiplicarPerigosa(n1: any, n2: any): number {
    return n1 * n2;
}

function imprimirNoConsole(): void {
    console.log('Olá mundo');
}
imprimirNoConsole()