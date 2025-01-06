interface BotoesProps {
    // alterarNome: () => void
    alterarNome(nome: string): void
}
export default function Botoes(props: BotoesProps){
    return(
        <div className="flex gap-5">
            <button onClick={() => props.alterarNome('Java')} className="botao">Java</button>
            <button onClick={() => props.alterarNome('Python')} className="botao">Python</button>
            <button onClick={() => props.alterarNome('Ruby')} className="botao">Ruby</button>
        </div>
    )
}