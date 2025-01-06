/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto(){
    const [valor, setValor] = useState("")
    function alterar(){
        
        setValor(`${Math.random()}`)
    }
    function alterarValor(e: any){
        console.log(e.target.value)
        setValor(e.target.value)
    }
    return(
        <Pagina titulo="Campo de texto" subtitulo="Capitulo Estado">
            <div className="flex flex-col gap-5">
                <input type="text" className="campo" value={valor} onChange={alterarValor}/>
                <button className="botao" onClick={alterar}>Alterar</button>
                <span>{valor}</span>
            </div>
        </Pagina>
    )
}