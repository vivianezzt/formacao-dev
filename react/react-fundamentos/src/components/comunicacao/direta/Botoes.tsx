import { useState } from "react";
import Valor from "./Valor";

export default function Botoes(){
    const [nome,setNome] = useState('')
    return (
        <div className="flex flex-col gap-5 items-center bg-zinc-700 p-4 rounded-md m-2">
            <div className="flex gap-5">
                <button className="botao" onClick={() => setNome('Javascript')}>Javascript</button>
                <button className="botao" onClick={() => setNome('React')}>React</button>
                <button className="botao" onClick={() => setNome('Nextjs')}>Nextjs</button>
            </div>
            <Valor texto={nome}/>
        </div>
    )
}