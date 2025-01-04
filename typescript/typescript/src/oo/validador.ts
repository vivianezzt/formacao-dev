export default class Validador {
    static readonly ERRO_DESCONBECIDO = 'Erro desconhecido';
    static maiorQueZero(n: number,msgErro:string){
        if(n <= 0) throw new Error(msgErro);
    }
     static tamanhoEntre(n: string, min: number, max: number, msgErro: string){
        Validador.entre(n.length, min, max, msgErro);
        
    }
    static entre(n: number, min: number, max: number, msgErro: string){
        if(n < min || n > max) throw new Error(msgErro);
    }
   // métodos estáticos que não precisam ser instanciados
}